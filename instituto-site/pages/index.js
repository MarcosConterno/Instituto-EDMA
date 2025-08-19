import { useRef, useEffect, useState } from "react";


const EDMAescada = () => {
  const pillars = [
    { img: "/img/E.svg", text: "ducação" },
    { img: "/img/D.svg", text: "escoberta" },
    { img: "/img/M.svg", text: "edicina" },
    { img: "/img/A.svg", text: "vançada" },
  ];

  // deslocamentos crescentes para a direita (escada)
  const offsets = [
    "ml-0 md:ml-0 -translate-y-3",
    "ml-6 md:ml-20 -translate-y-10",
    "ml-12 md:ml-40 -translate-y-14",
    "ml-18 md:ml-64 -translate-y-16", // se seu Tailwind não tiver 'ml-18', use 'ml-20' ou 'ml-[4.5rem]'
  ];

  return (
    <section className="relative text-white py-16 px-6 sm:px-10 md:px-16 max-w-screen-xl mx-auto font-livvic">
      <div className="w-full flex flex-col md:flex-row md:items-start gap-10 md:gap-20">
        {/* Imagem à esquerda */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-full h-[550px] rounded-lg overflow-hidden">
            <img
              src="/img/redondo_img_home.png"
              alt="Descrição da imagem"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Texto à direita */}
        <div className="md:w-1/2 max-w-xl text-left">
          <p className="text-sm uppercase text-gray-300 tracking-widest mb-2">PILARES</p>
          <h2 className="text-3xl font-bold mb-4 h-[50px]">Estamos revolucionando a saúde</h2>
          <h3 className="text-lg font-semibold mb-3 h-[50px]">Três pilares nos guiam nessa jornada</h3>
          <p className="text-gray-300 mb-6 h-[130px]">
            Com excelência em pesquisa, educação e inovação, nosso laboratório é referência em óleo de canabidiol.
            Investimos em estudos científicos para ampliar suas aplicações terapêuticas. Desenvolvemos produtos de alta
            qualidade com tecnologia de ponta, sempre focados em saúde e bem-estar.
          </p>

          {/* Escada: ícone + letra (imagem) + seu texto em negrito/maior, na MESMA posição de antes */}
          <ul className="space-y-6">
            {pillars.map((pillar, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 h-[68px] ${offsets[index]}`}
              >
                {/* ícone de check */}
                <img
                  src="/img/v_edma.svg"
                  alt="ícone"
                  className="w-6 h-6"
                />
                {/* imagem da letra */}
                <img
                  src={pillar.img}
                  alt={`pillar-${index}`}
                  className="h-20 w-auto"
                />
                {/* texto ao lado (mesma posição de antes, só maior/negrito) */}
                <span className="ml-0 text-xl md:text-2xl font-bold leading-none">
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

export default function Home() {
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
      playVideo();
    }, 100);
  };

  // detecta telas "bem largas" (27")
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= 1400); // ajuste o limite se quiser
    onResize();                           // roda uma vez ao montar
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white h-screen flex items-center justify-start font-livvic"
        style={{ backgroundImage: "url('/img/doctor.jpg')" }}
      >
        <div className="text-left px-16 py-12 max-w-6xl ml-8">
          <p className="text-xl mb-4 text-white font-normal">Terapia Canabidiol</p>
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="text-green-300">A ciência é nossa raiz</span>
            <br />
            <span className="text-white">e o cuidado nosso propósito</span>
          </h1>
          <p className="text-xl mb-8 text-white leading-relaxed">
            Cuidamos de você de uma forma única e especial!
            <br />
            Entre em contato agora.
          </p>
          <button className="px-8 py-4 bg-green-300 text-black text-lg font-medium rounded-full hover:bg-green-400 transition duration-300 shadow-lg">
            AGENDAR CONSULTA
          </button>
        </div>
      </section>

      {/* Seção Pilares */}
      <EDMAescada />

      {/* Seção com vídeo de fundo */}
      <section style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {!showVideo ? (
          // Thumbnail/Capa
          <div
            style={{
              position: "relative",
              width: "100%",
              height: isWide ? "85vh" : undefined,
              aspectRatio: isWide ? undefined : "16 / 9",
              backgroundImage: "url('/img/thumbvideo.png')",
              backgroundSize: isWide ? "cover" : "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "black",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px",
            }}
            onClick={handlePlayClick}
          >
            {/* Overlay escuro */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />

            {/* Conteúdo centralizado */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                maxWidth: "700px",
              }}
            >
              <p style={{ fontSize: "18px", marginBottom: "8px" }}>Assista agora</p>

              <h1
                style={{
                  fontSize: isWide ? "48px" : "28px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  lineHeight: "1.2",
                }}
              >
                <span style={{ color: "#4ade80" }}>Vídeo Institucional</span>
                <br />
                <span>Nossa missão e propósito</span>
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "32px",
                  lineHeight: "1.5",
                }}
              >
                Conheça um pouco mais sobre nosso trabalho e valores.
              </p>

              {/* Botão de Play centralizado com glow */}
              <div className="flex justify-center items-center w-full">
                <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-[3px] group cursor-pointer">
                  {/* Camada interna */}
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white group-hover:bg-transparent transition-all duration-300">
                    {/* Ícone Play */}
                    <div
                      className="ml-1"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "20px solid #333",
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
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
              onClick={() => {
                isPlaying ? pauseVideo() : playVideo();
              }}
              style={{
                width: "100%",
                height: isWide ? "85vh" : "auto",
                aspectRatio: isWide ? undefined : "16 / 9",
                objectFit: isWide ? "cover" : "contain",
                backgroundColor: "black",
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
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                aria-label={isMuted ? "Desmutar vídeo" : "Mutar vídeo"}
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            )}
          </>
        )}
      </section>
    </>
  );
}
