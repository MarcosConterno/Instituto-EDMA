import { google } from "googleapis";

/** ====== CONFIGURÁVEL ====== */
/** Nome da aba/guia do Sheets (sem '!A1') */
const SHEET_TAB = process.env.SHEETS_TAB || "Respostas";

/** Definição do cabeçalho (ordem e títulos na linha 1) */
const HEADERS = [
  { key: "submittedAt", title: "Enviado em" },
  { key: "role", title: "Perfil" },
  { key: "name", title: "Nome" },
  { key: "email", title: "E-mail" },
  { key: "phone", title: "Telefone" },
  { key: "message", title: "Mensagem" },
  { key: "consent", title: "Consentimento" },
  // Opcional: registro da página de origem (sem user-agent)
  { key: "page", title: "Página" },
];
/** ========================== */

function parseBody(req) {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body || {};
}

function readPrivateKey() {
  let key =
    process.env.GOOGLE_PRIVATE_KEY ||
    (process.env.GOOGLE_PRIVATE_KEY_BASE64
      ? Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, "base64").toString(
          "utf8"
        )
      : "");

  key = (key || "").trim();
  // remove aspas acidentais
  if (key.startsWith('"') && key.endsWith('"')) key = key.slice(1, -1);
  // corrige \n
  if (key.includes("\\n")) key = key.replace(/\\n/g, "\n");

  if (!/^-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(key)) {
    throw new Error(
      "GOOGLE_PRIVATE_KEY inválida. Precisa começar com '-----BEGIN ... PRIVATE KEY-----'."
    );
  }
  return key;
}

/** Normaliza telefone básico (opcional) */
function normalizePhone(v = "") {
  const d = String(v).replace(/\D/g, "").slice(0, 20);
  return d;
}

/** Garante que a primeira linha (1:1) tem o cabeçalho definido em HEADERS */
async function ensureHeaderRow(sheets, spreadsheetId) {
  const headerRange = `${SHEET_TAB}!1:1`;
  const current = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });

  const hasHeader =
    current?.data?.values &&
    current.data.values[0] &&
    current.data.values[0].length > 0;

  if (!hasHeader) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: headerRange,
      valueInputOption: "RAW",
      requestBody: { values: [HEADERS.map((h) => h.title)] },
    });
  }
}

/** Constrói a linha a inserir respeitando os títulos do cabeçalho */
function buildRowFromHeaders(data) {
  const now = new Date().toISOString();
  return HEADERS.map(({ key }) => {
    switch (key) {
      case "submittedAt":
        return now;
      case "consent":
        return data.consent ? "sim" : "não";
      case "page":
        return data._page || data.page || "";
      case "phone":
        return (data.phone || "").replace(/\D/g, "");
      case "role":
        return data.role || "Medico";           // 👈 novo
      default:
        return data[key] ?? "Paciente";
    }
  });
}


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const SPREADSHEET_ID = process.env.SHEETS_SPREADSHEET_ID;
  const SA_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  try {
    if (!SPREADSHEET_ID || !SA_EMAIL) {
      return res.status(500).json({
        ok: false,
        message:
          "Env ausentes. Defina SHEETS_SPREADSHEET_ID e GOOGLE_SERVICE_ACCOUNT_EMAIL.",
      });
    }

    const PRIVATE_KEY = readPrivateKey();

    // Sanitiza: só mantém campos aceitos; NÃO guardamos user-agent
    const raw = parseBody(req);
    const data = {
      name: (raw.name || "").trim(),
      email: (raw.email || "").trim(),
      phone: (raw.phone || "").trim(),
      message: (raw.message || "").trim(),
      consent: !!raw.consent,
      _page: (raw._page || "").trim(),
      // _ua: (raw._ua)  <-- NÃO usamos
    };

    // Validação simples
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({
        ok: false,
        message: "Campos obrigatórios ausentes (name, email, message).",
      });
    }

    // Auth via Service Account (JWT)
    const jwt = new google.auth.JWT({
      email: SA_EMAIL,
      key: PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    await jwt.authorize();

    const sheets = google.sheets({ version: "v4", auth: jwt });

    // Garante cabeçalho
    await ensureHeaderRow(sheets, SPREADSHEET_ID);

    // Monta linha respeitando o cabeçalho
    const row = buildRowFromHeaders(data);

    // Append no final da planilha (aba)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    const status = e?.response?.status || 500;
    const msg =
      e?.response?.data?.error?.message || e?.message || "Erro desconhecido";
    console.error("Sheets append error:", status, msg);

    if (status === 401) {
      return res.status(500).json({
        ok: false,
        message:
          "Auth 401: verifique SERVICE_ACCOUNT_EMAIL/PRIVATE_KEY e se a Sheets API está habilitada.",
      });
    }
    if (status === 403) {
      return res.status(500).json({
        ok: false,
        message:
          "Permissão 403: compartilhe a planilha com o e-mail da Service Account (Editor).",
      });
    }
    return res
      .status(500)
      .json({ ok: false, message: "Erro ao gravar no Google Sheets." });
  }
}
