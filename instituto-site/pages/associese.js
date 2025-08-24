// pages/associese.js
import Head from "next/head";
import { useState } from "react";

export default function Associese() {
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot: se preenchido, trata como sucesso silencioso
    if (fd.get("company")) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }

    // monta payload limpo
    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      phone: (fd.get("phone") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
      role: (fd.get("role") || "").toString(),          // "medico" | "paciente"
      consent: fd.get("consent") === "on",               // true/false
      _submittedAt: new Date().toISOString(),
      _page: typeof window !== "undefined" ? window.location.href : "",
    };

    // helper para log amigável
    const safeFetch = async (url, opts) => {
      try {
        const res = await fetch(url, opts);
        const text = await res.text().catch(() => "");
        console.debug("[submit]", url, res.status, text);
        return { ok: res.ok, status: res.status, text, url };
      } catch (err) {
        console.debug("[submit:error]", url, err?.message || err);
        return { ok: false, status: 0, text: String(err), url };
      }
    };

    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    try {
      const reqs = [
        safeFetch("/api/associese", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ];

      if (n8nUrl) {
        reqs.push(
          safeFetch(n8nUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        );
      }

      const results = await Promise.all(reqs);
      const atLeastOneOk = results.some((r) => r.ok);

      if (!atLeastOneOk) {
        console.warn("Nenhum destino aceitou:", results);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <>
      <Head>
        <title>Associe-se | EDMA Instituto</title>
        <meta
          name="description"
          content="Entre em contato para se associar ao EDMA Instituto."
        />
      </Head>

      {/* NÃO usamos outro <main> aqui porque o Layout já tem <main>. */}
      <div
        className="text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/fundo_associese.png')" }}
      >
        <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Lado Esquerdo */}
            <div>
              <p className="uppercase tracking-[0.2em] text-sm leading-6 text-[#c7d7c0]">
                Médicos e Pacientes
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">
                Entre em contato agora
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#dfe8da] opacity-90">
                Preencha o formulário ao lado e nossa equipe retornará com os
                próximos passos para a associação.
              </p>

              <div className="mt-10 space-y-7 text-sm">
                <div>
                  <div className="uppercase text-[#c7d7c0] tracking-widest text-[11px] mb-2">
                    Telefones de Contato
                  </div>
                  <div className="space-y-1">
                    <a className="block hover:underline" href="tel:+550000000000">
                      +55 (00) 00000-0000
                    </a>
                    <a className="block hover:underline" href="tel:+550000000000">
                      +55 (00) 00000-0000
                    </a>
                  </div>
                </div>

                <div>
                  <div className="uppercase text-[#c7d7c0] tracking-widest text-[11px] mb-2">
                    Email
                  </div>
                  <a className="hover:underline" href="mailto:institutoedma@gmail.com">
                    institutoedma@gmail.com
                  </a>
                </div>

                <div>
                  <div className="uppercase text-[#c7d7c0] tracking-widest text-[11px] mb-2">
                    Endereço
                  </div>
                  <p className="text-[#eef5ea]">
                    Rua Exemplo, 123 – Cidade, Estado, Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Lado Direito – Formulário */}
            <div className="md:pl-4">
              <form onSubmit={onSubmit} className="space-y-4" aria-label="Formulário de associação">
                {/* Honeypot (não remova o name="company") */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

                <Field>
                  <Label htmlFor="name">Seu nome</Label>
                  <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
                </Field>

                <Field>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    inputMode="tel"
                    pattern="[\d\s()+-]{8,}"
                    required
                  />
                </Field>

                <Field>
                  <Label htmlFor="email">Seu e-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="voce@exemplo.com" required />
                </Field>

                {/* Grupo: Perfil (radio) */}
                <Field>
                  <span className="block text-sm leading-6 font-medium tracking-wide text-[#cfe0c7]">
                    Você é:
                  </span>
                  <div className="mt-2 flex items-center gap-6 text-sm text-[#e9f3e4]">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        value="medico"
                        required
                        className="h-4 w-4 rounded border-[#3a4c37] bg-[#1f2b1e] accent-[#d8e6c9]"
                      />
                      <span>Médico</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        value="paciente"
                        className="h-4 w-4 rounded border-[#3a4c37] bg-[#1f2b1e] accent-[#d8e6c9]"
                      />
                      <span>Paciente</span>
                    </label>
                  </div>
                </Field>

                <Field>
                  <Label htmlFor="message">Sua mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte brevemente seu objetivo com a associação"
                    rows={6}
                    required
                  />
                </Field>

                {/* Consentimento (checkbox único) */}
                <Field>
                  <label className="flex items-start gap-3 text-sm text-[#e9f3e4]">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-[2px] h-4 w-4 rounded border-[#3a4c37] bg-[#1f2b1e] accent-[#d8e6c9]"
                      required
                    />
                    <span>
                      Concordo em receber contato do EDMA Instituto e aceito a política de privacidade.
                    </span>
                  </label>
                </Field>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full md:w-auto px-8 py-4 rounded-2xl text-[#111A17] bg-[#d8e6c9] hover:bg-white transition-colors duration-300 font-semibold shadow-[inset_0_-1px_0_rgba(0,0,0,.08)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                  </button>

                  {status === "success" && (
                    <p className="mt-3 text-sm text-[#d7f2cf]">Mensagem enviada com sucesso!</p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-red-200">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------- Componentes de UI (Tailwind puros) ---------- */

function Field({ children }) {
  return <div className="space-y-2">{children}</div>;
}

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm leading-6 font-medium tracking-wide text-[#cfe0c7]">
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl bg-[#1e2a1d] text-white placeholder:text-[#a6b5a2]",
        "border border-[#3a4c37] focus:border-[#d8e6c9] focus:ring-4 focus:ring-[#d8e6c9]/10",
        "px-4 py-3 outline-none transition-[box-shadow,border-color] duration-200",
      ].join(" ")}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-xl bg-[#1e2a1d] text-white placeholder:text-[#a6b5a2]",
        "border border-[#3a4c37] focus:border-[#d8e6c9] focus:ring-4 focus:ring-[#d8e6c9]/10",
        "px-4 py-3 outline-none transition-[box-shadow,border-color] duration-200",
      ].join(" ")}
    />
  );
}
