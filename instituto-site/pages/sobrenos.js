import { useRef, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const TypingEffect = ({ text, typingSpeed = 150, pause = 5000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Digitação letra a letra
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, pause]);

  return (
    <h1 className="text-white text-4xl sm:text-5xl lg:text-[70px] font-bold font-livvic whitespace-nowrap">
      {displayText}
      {/* Cursor piscando separado */}
      <span className="inline-block w-[4px] h-16 bg-white animate-blink ml-1 align-bottom" />
    </h1>
  );
};

const QuemSomos = () => {
  return (
    <section className="relative overflow-hidden text-white flex justify-start font-livvic min-h-[90vh] 
                        items-start md:items-center">
      <img
        src="/img/quemsomos.jpg"
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[center_32%]
          md:object-center
          pointer-events-none select-none
        "
        loading="eager"
      />

      <div className="relative text-right px-6 sm:px-12 md:px-16 py-10 max-w-full md:max-w-5xl z-10">
        <div className="inline-block overflow-hidden">
          <TypingEffect text="QUEM SOMOS" speed={2500} pause={5000} />
        </div>
      </div>
    </section>
  );
};

const SobreNos = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#111A17] to-[#254337]">
      {/* Hero Section with all content */}
      <div className="relative w-full px-4 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Nosso Propósito Section */}
        <div className="text-center mb-20 lg:mb-32 z-10 relative">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
            Nosso Propósito e Inspiração
          </h2>

          <div className="w-48 sm:w-56 lg:w-64 h-[3px] bg-[#c9d8b3] mx-auto mb-6" />
          <p className="text-white text-base sm:text-lg font-semibold leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
            O Instituto EDMA é um espaço de acolhimento e inovação, criado com o
            compromisso de transformar a ciência em esperança e garantir acesso
            a tratamentos eficazes e dignos. Sua origem é profundamente pessoal:
            desde a infância, acompanhei a luta da minha tia Edma contra a
            esquizofrenia, o que me ensinou sobre os desafios diários de quem
            enfrenta transtornos psiquiátricos, mas também sobre a força,
            sensibilidade e amor que acompanham essas histórias.
            <br />
            <br />O nome EDMA é uma homenagem a ela e carrega um significado
            profundo: Educação (levar conhecimento sobre saúde mental),
            Descoberta (pesquisar novas abordagens terapêuticas) e Medicina
            Avançada (aplicar a ciência para transformar vidas). "Edma", em sua
            origem germânica, significa "protetora dos bens", refletindo o
            cuidado, empatia e conexão humana que orientam nosso trabalho.
          </p>
        </div>

        {/* Imagem de fundo opcional */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/img/textura.png")', // Substitua pelo caminho da imagem
            backgroundSize: "cover", // Cobre todo o espaço
            backgroundPosition: "center", // Centraliza a imagem
            backgroundRepeat: "no-repeat", // Evita repetição
            backgroundBlendMode: "overlay", // Sobrepõe ao gradiente
            opacity: 1, // Opacidade correta
          }}
        />
      </div>
    </div>
  );
};

const Carta = () => {
  return (
    <section className="relative overflow-hidden text-white flex items-center justify-start font-livvic min-h-[90vh] md:min-h-[50svh]">
      {/* BG único para mobile e desktop */}
      <img
        src="/img/fundo_home.png"
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[center_32%]   /* mobile: enquadra mais alto */
          md:object-center       /* desktop: centraliza */
          pointer-events-none select-none
        "
        loading="eager"
      />

      {/* Conteúdo */}
      <div className="relative text-left px-6 sm:px-10 md:px-16 py-12 max-w-6xl md:ml-80">
        {/* Título */}
        <h1 className="font-bold leading-tight mb-6 text-2xl sm:text-4xl md:text-2xl">
          <span className="text-[#111A17]">Uma carta da nossa</span>
          <br />
          <span className="text-[#111A17] px-6 sm:px-10 md:px-13 py-12 text-3x1">
            idealizadora.
          </span>
          <br />
        </h1>

        <a
          href="/oInstituto"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 sm:mt-8 md:mt-0 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#111A17] text-white text-base sm:text-lg font-medium rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
        >
          Leia a Carta de Brunna
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <QuemSomos />
      <SobreNos />
      <Carta />
    </main>
  );
}
