import { useRef, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

/* =========================
   HERO (título, subtítulo, CTA)
   ========================= */
const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white min-h-[100svh] flex items-center justify-start font-livvic"
      style={{ backgroundImage: "url('/img/fundo_home.png')" }}
    >
      <div className="text-left px-6 sm:px-10 md:px-16 py-12 max-w-6xl md:ml-8">
        <p className="text-base sm:text-lg md:text-xl mb-4 text-[#111A17] font-normal">
          Terapia Canabidiol
        </p>

        {/* Título: reduzido no mobile para não estourar */}
        <h1 className="font-bold leading-tight mb-6 text-3xl sm:text-4xl md:text-6xl">
          <span className="text-[#111A17]">A ciência é nossa raiz</span>
          <br />
          <span className="text-[#254337]">e o cuidado nosso propósito</span>
        </h1>

        {/* Subtítulo */}
        <p className="mb-8 text-[#111A17] leading-relaxed text-base sm:text-lg md:text-xl">
          Cuidamos de você de uma forma única e especial!
          <br />
          Entre em contato agora.
        </p>

        <a
          href="https://wa.me/555599582403?text=Olá! Gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white text-base sm:text-lg font-medium rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
          AGENDAR CONSULTA
        </a>
      </div>
    </section>
  );
};

/* =========================
   PILARES (EDMA em coluna)
   ========================= */
const EDMAescada = () => {
  const letterColor = "#FFFFFF22"; // intensidade da letra de fundo
  // valores responsivos para mobile->desktop sem afetar o desktop original
  const sizeClamp = "clamp(3rem, 12vw, 4.5rem)";
  const leftDClamp = "clamp(2.5rem, 10vw, 5rem)";
  const leftAClamp = "clamp(2.75rem, 10vw, 5rem)";
  const mlDClamp = "clamp(2.5rem, 10vw, 5rem)";
  const mlAClamp = "clamp(2.75rem, 10vw, 4rem)";

  return (
    <section className="relative w-full bg-[#254337] py-12 sm:py-16 px-4 sm:px-10 md:px-16 font-livvic">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-start gap-8 sm:gap-10 md:gap-20">
        {/* Imagem à esquerda */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[92%] sm:w-[85%] md:w-full mx-auto aspect-[5/4] sm:aspect-[16/11] md:aspect-auto md:h-[480px]">
            <img
              src="/img/redondo_img_home.png"
              alt="Descrição da imagem"
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="md:w-1/2 max-w-xl text-left text-white">
          <p className="text-[11px] sm:text-xs uppercase text-gray-300 tracking-[0.2em] mb-2">
            PILARES
          </p>

          <h2 className="font-bold mb-3 text-2xl sm:text-3xl md:text-4xl">
            Estamos revolucionando a saúde
          </h2>

          <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl text-gray-100">
            Três pilares nos guiam nessa jornada
          </h3>

          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Com excelência em pesquisa, educação e inovação, nosso laboratório é
            referência em óleo de canabidiol. Investimos em estudos científicos
            para ampliar suas aplicações terapêuticas. Desenvolvemos produtos de
            alta qualidade com tecnologia de ponta, sempre focados em saúde e
            bem-estar.
          </p>

          {/* Lista vertical com letras atrás do início das palavras */}
<ul className="relative space-y-3 sm:space-y-4 md:space-y-5">
  {/* EDUCAÇÃO (E) — já estava ok */}
  <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[72px]">
    {/* Letra E */}
    <span
      aria-hidden="true"
      className="absolute z-0 pointer-events-none select-none animate-edma-soft"
      style={{
        width: "4.5rem",
        height: "4.5rem",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF22",
        WebkitMask: "url(/img/edma.svg/E.svg) no-repeat center / contain",
        mask: "url(/img/edma.svg/E.svg) no-repeat center / contain",
        animationDelay: "0s",
      }}
    />
    {/* Texto centralizado verticalmente no mesmo li */}
    <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none ml-0">
      Educação
    </span>
  </li>

  {/* DESCOBERTA (D) — centrado mobile/desktop */}
  <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[20px]">
    {/* Letra D */}
    <span
      aria-hidden="true"
      className="absolute z-0 pointer-events-none select-none animate-edma-soft"
      style={{
        width: "4.5rem",
        height: "4.5rem",
        top: "50%",                 // centraliza em todas as telas
        left: "5rem",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF22",
        WebkitMask: "url(/img/edma.svg/D.svg) no-repeat center / contain",
        mask: "url(/img/edma.svg/D.svg) no-repeat center / contain",
        animationDelay: "0.3s",
      }}
    />
    {/* Texto alinhado ao mesmo eixo vertical do SVG */}
    <span
      className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none"
      style={{ marginLeft: "5rem" }} // mesmo left do D
    >
      Descoberta
    </span>
  </li>

  {/* MEDICINA (M) — centrado mobile/desktop */}
  <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[50px]">
    {/* Letra M */}
    <span
      aria-hidden="true"
      className="absolute z-0 pointer-events-none select-none animate-edma-soft"
      style={{
        width: "4.5rem",
        height: "4.5rem",
        top: "50%",
        left: "0",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF22",
        WebkitMask: "url(/img/edma.svg/M.svg) no-repeat center / contain",
        mask: "url(/img/edma.svg/M.svg) no-repeat center / contain",
        animationDelay: "0.6s",
      }}
    />
    <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none ml-0">
      Medicina
    </span>
  </li>

  {/* AVANÇADA (A) — centrado mobile/desktop */}
  <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[50px]">
    {/* Letra A */}
    <span
      aria-hidden="true"
      className="absolute z-0 pointer-events-none select-none animate-edma-soft"
      style={{
        width: "4.5rem",
        height: "4.5rem",
        top: "50%",
        left: "5rem",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF22",
        WebkitMask: "url(/img/edma.svg/A.svg) no-repeat center / contain",
        mask: "url(/img/edma.svg/A.svg) no-repeat center / contain",
        animationDelay: "0.9s",
      }}
    />
    <span
      className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none"
      style={{ marginLeft: "5rem" }} // mesmo left do A
    >
      Avançada
    </span>
  </li>
</ul>



        </div>
      </div>
    </section>
  );
};

/* =========================
   VÍDEO (thumbnail + player)
   ========================= */
const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    const el = videoRef.current;
    if (el) { el.play(); setIsPlaying(true); }
  };

  const pauseVideo = () => {
    const el = videoRef.current;
    if (el) { el.pause(); setIsPlaying(false); }
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      const el = videoRef.current;
      if (el) {
        el.muted = false;
        setIsMuted(false);
        playVideo();
      }
    }, 100);
  };

  const [isWide, setIsWide] = useState(false);
  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= 1400);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {!showVideo ? (
        <div
          className="relative w-full cursor-pointer"
          style={{
            aspectRatio: isWide ? undefined : "16 / 9",
            height: isWide ? "85vh" : undefined,
          }}
          onClick={handlePlayClick}
        >
          <img
            src="/img/thumbvideo.png"
            alt="Thumb Vídeo"
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <p className="mb-2 text-[clamp(12px,2.8vw,18px)]">Assista agora</p>
            <h1 className="font-bold leading-snug mb-3">
              <span className="block text-green-400 text-[clamp(18px,5vw,36px)]">
                Vídeo Institucional
              </span>
              <span className="block text-[clamp(22px,7vw,48px)]">
                Nossa missão e
                <br className="hidden sm:block" />
                propósito
              </span>
            </h1>
            <p className="mb-6 max-w-[680px] text-[clamp(12px,3.4vw,18px)] leading-relaxed">
              Conheça um pouco mais sobre nosso trabalho e valores.
            </p>
            <div className="flex justify-center items-center w-full">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-[3px] group">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white group-hover:bg-transparent transition-all duration-300">
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "14px solid #333",
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                    }}
                  />
                </div>
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-blue-600 opacity-20 blur-xl scale-125 transition-all duration-500 ease-in-out group-hover:opacity-70 group-hover:scale-150"></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src="/videos/EdmaBrunaComLettering.mp4"
            onClick={() => (isPlaying ? pauseVideo() : playVideo())}
            style={{
              width: "100%",
              height: isWide ? "85vh" : "auto",
              aspectRatio: isWide ? undefined : "16 / 9",
              objectFit: isWide ? "cover" : "contain",
              cursor: "pointer",
              display: "block",
            }}
            muted={isMuted}
            playsInline
            preload="metadata"
          />
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="absolute bottom-5 right-5 bg-black/60 text-white rounded-full w-10 h-10 text-xl leading-none z-10 flex items-center justify-center"
              aria-label={isMuted ? "Desmutar vídeo" : "Mutar vídeo"}
              title={isMuted ? "Desmutar vídeo" : "Mutar vídeo"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          )}
        </>
      )}
    </section>
  );
};

/* =========================
   PÁGINA
   ========================= */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1) Hero */}
      <HeroSection />

      {/* 2) Pilares */}
      <EDMAescada />

      {/* 3) Vídeo */}
      <VideoSection />
    </main>
  );
}
