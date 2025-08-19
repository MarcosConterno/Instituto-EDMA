// pages/api/associese.js
import { google } from "googleapis";

function parseBody(req) {
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return req.body || {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    // ----- valida envs obrigatórias -----
    const SPREADSHEET_ID = process.env.SHEETS_SPREADSHEET_ID;
    const SERVICE_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const PRIVATE_KEY_RAW = process.env.GOOGLE_PRIVATE_KEY;

    if (!SPREADSHEET_ID || !SERVICE_EMAIL || !PRIVATE_KEY_RAW) {
      console.error("ENV faltando:", {
        SHEETS_SPREADSHEET_ID: !!SPREADSHEET_ID,
        GOOGLE_SERVICE_ACCOUNT_EMAIL: !!SERVICE_EMAIL,
        GOOGLE_PRIVATE_KEY: !!PRIVATE_KEY_RAW,
      });
      return res.status(500).json({ ok: false, message: "Configuração do Google Sheets ausente." });
    }

    const data = parseBody(req);

    // ----- Validações simples do payload -----
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ ok: false, message: "Campos obrigatórios ausentes (name, email, message)." });
    }

    // ----- Autenticação (Service Account) -----
    const auth = new google.auth.JWT(
      SERVICE_EMAIL,
      undefined,
      PRIVATE_KEY_RAW.replace(/\\n/g, "\n"), // corrige quebras de linha vindas do .env
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    // ----- Monta a linha a ser inserida -----
    const nowIso = new Date().toISOString();
    const values = [[
      nowIso,                     // A: timestamp ISO
      data.name || "",            // B
      data.email || "",           // C
      data.phone || "",           // D
      data.message || "",         // E
      data.consent ? "sim" : "não", // F
      data._page || "",           // G (opcional: página de origem)
      data._userAgent || "",      // H (opcional: user agent)
    ]];

    // ----- Intervalo/aba (padrão Respostas!A1) -----
    const RANGE = process.env.SHEETS_RANGE || "Respostas!A1";

    // ----- Append no Sheets -----
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("associese error:", e);
    return res.status(500).json({ ok: false, message: "Erro ao gravar no Google Sheets." });
  }
}
