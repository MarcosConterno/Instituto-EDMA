// pages/tratamento.jsx (ou app/tratamento/page.jsx)
import React from "react";

export default function Tratamento() {
  const steps = [
    { title: "Consulta com especialista", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..", icon: SpecialistIcon },
    { title: "Reunir documentação", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: DocsIcon },
    { title: "Prescrição personalizada", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: RxIcon },
    { title: "Aquisição do tratamento", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: DropperIcon },
    { title: "Acompanhamento e ajustes", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", icon: FollowIcon },
  ];

  return (
    <div className="min-h-screen bg-[#334B35] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/tratamento.png"
          alt="Cannabis background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#0b130f]/40" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 px-4 py-24">
        <div className="text-center mb-16 font-livvic">
          <h1 className="text-[34px] md:text-[42px] font-bold leading-tight max-w-[900px] mx-auto">
            <span className="text-white">Como iniciar um tratamento de </span>
            <span className="text-[#F7F8D8]">cannabis pelo instituto EDMA</span>
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha vertical central (desktop) */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/20" />

          <ul className="space-y-10 md:space-y-14">
            {steps.map((s, i) => (
              <TimelineRow key={i} index={i} title={s.title} text={s.text} Icon={s.icon} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ===== Linha (row) com 3 colunas no desktop ===== */
function TimelineRow({ index, title, text, Icon }) {
  const rightSide = index % 2 === 1; // true => card na direita
  const number = index + 1;

  return (
    <li className="relative">
      <div className="grid grid-cols-1 md:[grid-template-columns:1fr_2px_1fr] md:gap-8 items-center">
        {/* ESQUERDA (desktop) */}
        <div className="hidden md:block">
          {!rightSide && (
            <StepBox
              title={title}
              text={text}
              Icon={Icon}
              number={number}
              side="left"
              alignClass="ml-auto" // encosta o card na linha central
            />
          )}
        </div>

        {/* COLUNA CENTRAL: ponto visual (a linha vertical já está no container pai) */}
        <div className="hidden md:flex relative items-center justify-center">
          <span className="h-5 w-5 rounded-full bg-white/15 ring-1 ring-white/30" />
        </div>

        {/* DIREITA (desktop) */}
        <div className="hidden md:block">
          {rightSide && (
            <StepBox
              title={title}
              text={text}
              Icon={Icon}
              number={number}
              side="right"
              alignClass="mr-auto" // encosta o card na linha central
            />
          )}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <StepBox title={title} text={text} Icon={Icon} number={number} side="mobile" />
        </div>
      </div>
    </li>
  );
}

/* ===== Caixa do passo ===== */
function StepBox({ title, text, Icon, number, side, alignClass = "" }) {
  return (
    <div className={`relative w-full md:w-auto md:max-w-[520px] ${alignClass}`}>
      {/* Número (mais para dentro, perto da linha central) */}
      <NumberBadge number={number} side={side} />

      {/* RISCO dedicado ao NÚMERO (vai do número até a linha central) */}
      <span
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-white/40 ${
          side === "left"
            ? "left-[-62px] w-[62px]"   // (número ~70px) → risco ~62px até a linha central
            : "right-[-62px] w-[62px]"
        }`}
      />

      {/* Card */}
      <div className="rounded-[28px] md:rounded-[36px] border border-white/35 bg-white/10 backdrop-blur-xl p-6 md:p-7 text-left shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-white/15 border border-white/30 grid place-items-center">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <h3 className="text-white text-lg md:text-xl font-bold">{title}</h3>
        </div>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/* ===== Badge de número (lado oposto ao card) ===== */
function NumberBadge({ number, side }) {
  const base =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 rounded-full shadow-lg shadow-black/30 z-20 ring-2 ring-white/60 items-center justify-center";
  // card à esquerda → número a ~70px à direita do card (perto da linha central)
  // card à direita → número a ~70px à esquerda do card
  const pos =
    side === "left"
      ? "left-[-70px]"
      : side === "right"
      ? "right-[-70px]"
      : "left-[-70px]";

  return (
    <div
      className={`${base} ${pos} bg-gradient-to-br from-[#F7F8D8] to-[#C7D1A3] text-[#24382f] font-semibold`}
    >
      {number}
    </div>
  );
}

/* ===== Ícones SVG ===== */
function SpecialistIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 12a4 4 0 1 0-0.001-8.001A4 4 0 0 0 12 12Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function DocsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 3h7l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function RxIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 4h12v16H4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 8h5M7.5 12h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 16l3 3M19 16l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function DropperIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 3l6 6-8.5 8.5A4 4 0 0 1 8 20H6v-2a4 4 0 0 1 1.5-3L16 3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 5l6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function FollowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 19a6 6 0 0 1 11 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14.5 19a4.5 4.5 0 0 1 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
