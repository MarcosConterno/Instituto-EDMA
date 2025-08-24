import { useRef, useEffect, useState } from "react";

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

        {/* Subtítulo com tamanhos graduais */}
        <p className="mb-8 text-[#111A17] leading-relaxed text-base sm:text-lg md:text-xl">
          Cuidamos de você de uma forma única e especial!
          <br />
          Entre em contato agora.
        </p>

        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-300 text-black text-base sm:text-lg font-medium rounded-full hover:bg-green-400 transition duration-300 shadow-lg">
          AGENDAR CONSULTA
        </button>
      </div>
    </section>
  );
};

/* =========================
   PILARES (sua “escada”)
   ========================= */
const EDMAescada = () => {
  const pillars = [
    { img: "/img/E.svg", text: "ducação" },
    { img: "/img/D.svg", text: "escoberta" },
    { img: "/img/M.svg", text: "edicina" },
    { img: "/img/A.svg", text: "vançada" },
  ];

  // Efeito escada só a partir de md (no mobile fica linear/limpo)
  const offsets = [
    "md:ml-0 md:-translate-y-3",
    "md:ml-20 md:-translate-y-10",
    "md:ml-40 md:-translate-y-14",
    "md:ml-64 md:-translate-y-16",
  ];

  return (
    <section className="relative text-white py-12 sm:py-16 px-4 sm:px-10 md:px-16 max-w-screen-xl mx-auto font-livvic">
      <div className="w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-10 md:gap-20">
        {/* Imagem à esquerda (no mobile vem primeiro, full width e com aspect ratio) */}
        <div className="md:w-1/2">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:h-[550px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/redondo_img_home.png"
              alt="Descrição da imagem"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="md:w-1/2 max-w-xl text-left">
          <p className="text-[11px] sm:text-xs uppercase text-gray-300 tracking-[0.2em] mb-2">
            PILARES
          </p>

          <h2 className="font-bold mb-3 text-2xl sm:text-3xl">
            Estamos revolucionando a saúde
          </h2>

          <h3 className="font-semibold mb-4 text-base sm:text-lg text-gray-100">
            Três pilares nos guiam nessa jornada
          </h3>

          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Com excelência em pesquisa, educação e inovação, nosso laboratório é referência em óleo de canabidiol.
            Investimos em estudos científicos para ampliar suas aplicações terapêuticas. Desenvolvemos produtos de alta
            qualidade com tecnologia de ponta, sempre focados em saúde e bem-estar.
          </p>

          {/* Lista dos pilares */}
          <ul className="space-y-4 sm:space-y-6">
            {pillars.map((pillar, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 sm:gap-4 ${offsets[index]}`}
              >
                {/* ícone */}
                <img
                  src="/img/v_edma.svg"
                  alt="ícone"
                  className="w-5 h-5 sm:w-6 sm:h-6 block shrink-0"
                />
                {/* letra */}
                <img
                  src={pillar.img}
                  alt={`pillar-${index}`}
                  className="h-12 sm:h-16 md:h-20 w-auto block shrink-0"
                />
                {/* texto */}
                <span className="text-base sm:text-lg md:text-2xl font-bold leading-none">
                  {pillar.text}
                </span>
              </li>
            ))}
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
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handlePlayClick = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        // garante som ao iniciar via clique
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      playVideo();
    }, 100);
  };

  // Detecta telas "bem largas" (27")
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
      // Thumbnail/Capa
      <div
        className="relative w-full cursor-pointer"
        style={{
          // Altura fluida: 16:9 no mobile; altura fixa nas telas maiores
          aspectRatio: isWide ? undefined : "16 / 9",
          height: isWide ? "85vh" : undefined,
        }}
        onClick={handlePlayClick}
      >
        {/* Thumb como <img> para evitar faixas */}
        <img
          src="/img/thumbvideo.png"
          alt="Thumb Vídeo"
          className="absolute inset-0 w-full h-full object-contain md:object-cover"
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Conteúdo centralizado */}
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

          {/* Botão de Play centralizado com glow */}
          <div className="flex justify-center items-center w-full">
            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-[3px] group">
              {/* Camada interna */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white group-hover:bg-transparent transition-all duration-300">
                {/* Ícone Play */}
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
              {/* Glow externo */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-blue-600 opacity-20 blur-xl scale-125 transition-all duration-500 ease-in-out group-hover:opacity-70 group-hover:scale-150"></span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      // Vídeo real
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

        {/* Botão Mute/Unmute */}
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
    // Wrapper global para matar qualquer overflow horizontal acidental
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
