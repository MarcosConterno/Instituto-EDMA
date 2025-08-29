import { useRef, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


/* =========================
   HERO (título, subtítulo, CTA)
   ========================= */
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden text-white flex items-center justify-start font-livvic min-h-[90vh] md:min-h-[100svh]">
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
      <div className="relative text-left px-6 sm:px-10 md:px-16 py-12 max-w-6xl md:ml-8">
        <p className="text-base sm:text-lg md:text-xl mb-4 text-[#111A17] font-normal">
          Terapia Canabidiol
        </p>

        {/* Título */}
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
          className="mt-6 sm:mt-8 md:mt-0 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white text-base sm:text-lg font-medium rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
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
  const sizeClamp = "clamp(3rem, 12vw, 4.5rem)";
  const leftDClamp = "clamp(2.5rem, 10vw, 5rem)";
  const leftAClamp = "clamp(2.75rem, 10vw, 5rem)";
  const mlDClamp = "clamp(2.5rem, 10vw, 5rem)";
  const mlAClamp = "clamp(2.75rem, 10vw, 4rem)";

  return (
    <section
      className=" relative w-full bg-[#111A17]
                  py-12 sm:py-16        /* mantém o top */
                  pb-4  sm:pb-6 md:pb-8 /* ↓ reduz só a parte de baixo */
                  px-4 sm:px-10 md:px-16 font-livvic"
      style={{
        // 👇 Cor com alpha por cima + imagem ao fundo
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.35), rgba(29, 85, 63, 0.45)), url('/img/textura.PNG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
            NOSSOS PILARES
          </p>

          <h2 className="font-bold mb-3 text-2xl sm:text-3xl md:text-4xl">
            Estamos revolucionando a saúde
          </h2>

          <h3 className="font-semibold mb-4 text-base sm:text-lg md:text-xl text-gray-100">
            Três pilares nos guiam nessa jornada
          </h3>

          <p className="text-gray-20 mb-6 text-sm sm:text-base leading-relaxed">
            No Instituto EDMA, nossos pilares sustentam tudo o que fazemos. 
            Educação para formar e informar, levando conhecimento que transforma. 
            Descoberta para pesquisar e inovar, abrindo novos caminhos de esperança. 
            Medicina Avançada para oferecer um cuidado humano, seguro e personalizado, 
            unindo ciência e acolhimento em cada etapa da jornada.
          </p>

          {/* Lista vertical com letras atrás do início das palavras */}
          <ul className="relative space-y-3 sm:space-y-4 md:space-y-5">
            {/* EDUCAÇÃO (E) */}
            <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[72px]">
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
                  WebkitMask:
                    "url(/img/edma.svg/E.svg) no-repeat center / contain",
                  mask: "url(/img/edma.svg/E.svg) no-repeat center / contain",
                  animationDelay: "0s",
                }}
              />
              <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none ml-0 animate-typing">
                Educação
              </span>
            </li>

            {/* DESCOBERTA (D) */}
            <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[20px]">
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
                  WebkitMask:
                    "url(/img/edma.svg/D.svg) no-repeat center / contain",
                  mask: "url(/img/edma.svg/D.svg) no-repeat center / contain",
                  animationDelay: "0.3s",
                }}
              />
              <span
                className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none animate-typing"
                style={{ marginLeft: "5rem" }}
              >
                Descoberta
              </span>
              
            </li>

            {/* MEDICINA (M) */}
            <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[50px]">
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
                  WebkitMask:
                    "url(/img/edma.svg/M.svg) no-repeat center / contain",
                  mask: "url(/img/edma.svg/M.svg) no-repeat center / contain",
                  animationDelay: "0.6s",
                }}
              />
              <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none ml-0 animate-typing">
                Medicina
              </span>
            </li>

            {/* AVANÇADA (A) */}
            <li className="relative isolate flex items-center overflow-visible min-h-[56px] sm:min-h-[64px] md:min-h-[50px]">
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
                  WebkitMask:
                    "url(/img/edma.svg/A.svg) no-repeat center / contain",
                  mask: "url(/img/edma.svg/A.svg) no-repeat center / contain",
                  animationDelay: "0.9s",
                }}
              />
              <span
                className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold leading-none animate-typing"
                style={{ marginLeft: "5rem" }}
              >
                Avançada
              </span>
            </li>
          </ul>

          {/* animação suave EDMA */}
          <style jsx global>{`
            @keyframes edmaSoftBounce {
              0%,
              100% {
                transform: translateY(-50%);
              }
              50% {
                transform: translateY(calc(-50% - 6px));
              }
            }
            .animate-edma-soft {
              animation: edmaSoftBounce 6s ease-in-out infinite;
              will-change: transform;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-edma-soft {
                animation: none;
              }
            }
          `}</style>
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

  // tempo
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  // breakpoints
  const [isWide, setIsWide] = useState(false);     // ≥1400px
  const [isMobile, setIsMobile] = useState(false); // <768px

  useEffect(() => {
    const onResize = () => {
      setIsWide(window.innerWidth >= 1400);
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const playVideo = () => {
    const el = videoRef.current;
    if (el) {
      el.play();
      setIsPlaying(true);
    }
  };
  const pauseVideo = () => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      setIsPlaying(false);
    }
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

  const onLoadedMetadata = () => {
    const el = videoRef.current;
    if (el && !Number.isNaN(el.duration)) setDuration(el.duration);
  };
  const onTimeUpdate = () => {
    const el = videoRef.current;
    if (!el) return;
    if (!isSeeking) setCurrentTime(el.currentTime);
  };

  const formatTime = (sec) => {
    if (!isFinite(sec)) return "00:00";
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleSeekChange = (e) => {
    setIsSeeking(true);
    setCurrentTime(Number(e.target.value));
  };
  const handleSeekCommit = (e) => {
    const el = videoRef.current;
    if (!el) return;
    const val = Number(e.target.value);
    el.currentTime = val;
    setCurrentTime(val);
    setIsSeeking(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {!showVideo ? (
        // THUMB / CAPA (continua tela cheia no mobile)
        <div
          className="relative w-full cursor-pointer"
          style={{ height: isWide ? "85vh" : "100svh" }}
          onClick={handlePlayClick}
        >
          <img
            src="/img/doctor.jpg"
            alt="Thumb Vídeo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <p className="mb-2 text-[clamp(12px,2.8vw,18px)]">Assista agora</p>
            <h1 className="font-bold leading-snug mb-3">
              <span className="block text-[#7be495] text-[clamp(18px,5vw,36px)]">
                Vídeo Institucional
              </span>
              <span className="block text-[clamp(22px,7vw,40px)]">
                Nossa missão e propósito
              </span>
            </h1>
            <p className="mb-6 max-w-[680px] text-[clamp(12px,3.4vw,18px)] leading-relaxed">
              Conheça um pouco mais sobre nosso trabalho e valores.
            </p>

            {/* Play */}
            <div className="flex justify-center items-center w-full">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#254337] to-[#111A17] p-[3px] group motion-safe:animate-bounce">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#728979] group-hover:bg-transparent transition-all duration-300">
                  <div
                    className="ml-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "14px solid #000000ff",
                      borderTop: "9px solid transparent",
                      borderBottom: "9px solid transparent",
                    }}
                  />
                </div>
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-600 to-white opacity-10 blur-xl scale-125 transition-all duration-500 ease-in-out group-hover:opacity-60 group-hover:scale-150"></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // VÍDEO
        <div
          className="relative w-full group"
          style={{
            // Desktop largo = 85vh; telas menores = altura automática com 16:9
            height: isWide ? "85vh" : "auto",
            // reserva espaço no mobile pra evitar layout shift
            aspectRatio: isWide ? undefined : "16 / 9",
          }}
        >
          <video
            ref={videoRef}
            src="/videos/EdmaBrunaComLettering.mp4"
            onClick={() => (isPlaying ? pauseVideo() : playVideo())}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedMetadata={onLoadedMetadata}
            onTimeUpdate={onTimeUpdate}
            style={{
              width: "100%",
              height: isWide ? "100%" : "auto",
              objectFit: isWide ? "cover" : "contain", // << chave: mobile ajusta, desktop cobre
              display: "block",
              backgroundColor: "black", // barras laterais/verticais discretas quando 'contain'
            }}
            muted={isMuted}
            playsInline
            preload="metadata"
          />

          {/* Overlay PLAY quando pausado */}
          {!isPlaying && (
            <button
              onClick={playVideo}
              aria-label="Reproduzir vídeo"
              className="absolute inset-0 z-20 flex items-center justify-center focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-[3px] motion-safe:animate-bounce">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white transition-all duration-300">
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
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-blue-600 opacity-20 blur-xl scale-125"></span>
              </div>
            </button>
          )}

          {/* Controles */}
          <div
            className="
              absolute inset-x-0 bottom-0 z-30
              p-3 sm:p-4
              bg-gradient-to-t from-black/55 to-transparent
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-opacity duration-300
            "
          >
            <input
              type="range"
              min={0}
              max={Number.isFinite(duration) ? Math.floor(duration) : 0}
              step={1}
              value={currentTime}
              onChange={handleSeekChange}
              onMouseUp={handleSeekCommit}
              onTouchEnd={handleSeekCommit}
              className="
                w-full h-2
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-runnable-track]:h-2
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-white/30
                accent-green-500
                cursor-pointer
              "
              aria-label="Barra de tempo do vídeo"
            />

            <div className="mt-2 flex items-center justify-between text-[11px] sm:text-xs text-white/90">
              <span>{formatTime(currentTime)}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleMute}
                  className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  aria-label={isMuted ? "Desmutar vídeo" : "Mutar vídeo"}
                  title={isMuted ? "Desmutar vídeo" : "Mutar vídeo"}
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/* =========================
   GRUPOS DE CUIDADO
   ========================= */
const GruposCuidado = () => {
  const grupos = [
    {
      titulo: "Saúde mental",
      subtitulo: "e bem-estar",
      icone: "/img/novas/saude_mental.svg",
    },
    {
      titulo: "Controle da",
      subtitulo: "Dor e Inflamações",
      icone: "/img/novas/controle_dor.svg",
    },
    {
      titulo: "Doenças",
      subtitulo: "Neurológicas e Distúrbios",
      icone: "/img/novas/doencas_neur.svg",
    },
    {
      titulo: "Condições",
      subtitulo: "Físicas e Tratamentos",
      icone: "/img/novas/condic_fisica.svg",
    },
    {
      titulo: "Condições",
      subtitulo: "Crônicas e Degenerativas",
      icone: "/img/novas/condic_cron.svg",
    },
  ];

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundColor: "#111A17", 
        backgroundImage:
          "linear-gradient(rgba(29, 85, 63, 0.45), rgba(0, 0, 0, 0.35)), url('/img/textura.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título e subtítulo */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-white/70 tracking-widest mb-4">
            ATENÇÃO ESPECIAL PARA SUA SAÚDE
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#A3DB9D" }}
          >
            Tratamos saúde com foco em você
          </h2>
          <p className="text-xl font-bold" style={{ color: "#A3DB9D" }}>
            Saiba mais sobre nossos grupos de cuidado
          </p>
        </div>

        {/* Grid responsivo de ícones + rótulos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 place-items-center">
          {grupos.map((grupo, index) => (
            <figure
              key={index}
              className={`
                group relative flex flex-col items-center text-center
                rounded-2xl p-4
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_-6px_rgba(16,185,129,.45)]
                ${index === grupos.length - 1 ? 'col-span-full sm:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 flex items-center justify-center">
                <img
                  src={grupo.icone}
                  alt={`${grupo.titulo} ${grupo.subtitulo}`}
                  className="max-w-full max-h-full object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                    filter-none drop-shadow-none"
                  loading="lazy"
                />
              </div>

              <figcaption className="mt-3 text-white/90 text-sm leading-tight">
                <span className="block font-semibold">{grupo.titulo}</span>
                <span className="block text-white/80">{grupo.subtitulo}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};


/* =========================
   ESPECIALISTAS — carrossel mantendo o mesmo layout
   ========================= */
const Especialistas = () => {
  const especialistas = [
    {
      nome: "Rafael Zotti Rossetto",
      cargo: "Fisioterapeuta",
      img: "/img/especialistas/med01.png",
      bio: "Especialista em neurociências e Mestre em Ciências da Reabilitação pela USP. Atua com reabilitação e saúde para atletas, idosos e público geral. Fundador da ONCOMAT e criador da metodologia de tratamento ONCOMAT, focado no cuidado em saúde.",
    },
    {
      nome: "Rodolfo Hellmann",
      cargo: "Médico",
      img: "/img/especialistas/med02.jpeg",
      bio: "Médico pela Universidade de Marília, pós-graduado em Psiquiatria pelo Instituto Israelita Albert Einstein. Prescritor de Cannabis Medicinal desde 2020, com certificado pela WeCann Academy.",
    },
    {
      nome: "Silvio Soares",
      cargo: "Médico",
      img: "/img/especialistas/med03.png",
      bio: "Médico, psicólogo especialista em Terapia Cognitivo-Comportamental, Mestre em Ciências Biomédicas e doutorando em Neurologia. Integra saúde mental e biomedicina para intervenções terapêuticas inovadoras.",
    },
    {
      nome: "Kamila Scherer",
      cargo: "Enfermeira",
      img: "/img/especialistas/med04.png",
      bio: "Enfermeira doula, especialista em Enfermagem Obstétrica. Une técnica e prática em abordagem integrada para pacientes que utilizam medicinas naturais, promovendo autonomia e bem-estar.",
    },
    // 5º (fictício) para testar o carrossel
    {
      nome: "Beatriz Almeida",
      cargo: "Nutricionista",
      img: "/img/especialistas/med05.png", // coloque uma imagem ou reaproveite alguma existente
      bio: "Nutricionista com foco em saúde integrativa e protocolos adjuntos com fitocanabinoides. Atuação em performance, sono e qualidade de vida.",
    },
  ];

  // cálculo responsivo: 4 (≥1024), 2 (≥640), 1 (<640)
  const getPerView = () =>
    window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;

  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const calc = () => setPerView(getPerView());
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // cria páginas de perView itens (não limita a lista)
  const pages = (() => {
    const out = [];
    for (let i = 0; i < especialistas.length; i += perView) {
      out.push(especialistas.slice(i, i + perView));
    }
    return out;
  })();

  // sempre que o perView muda, volta para a primeira página
  useEffect(() => setPage(0), [perView]);

  const next = () => setPage((p) => (p + 1) % pages.length);
  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);

  // card: mesma estrutura que você aprovou (foto 3:4 + textos centralizados)
  const Card = ({ p }) => (
    <figure className="flex flex-col items-center text-center">
      <div className="w-[220px] sm:w-[240px] lg:w-[220px] aspect-[3/4] rounded-xl overflow-hidden shadow-md">
        <img
          src={p.img}
          alt={p.nome}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-4 max-w-[18rem] mx-auto">
        <h3 className="text-base md:text-lg font-bold text-white mb-1 font-livvic">
          {p.nome}
        </h3>
        <p className="text-sm font-bold mb-2" style={{ color: "#A3DB9D" }}>
          {p.cargo}
        </p>
        <p className="text-xs text-white/90 leading-relaxed font-livvic">
          {p.bio}
        </p>
      </figcaption>
    </figure>
  );

  return (
    <section
      className="w-full py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage:
          "url('/img/especialistas/cannabis-marijuana-leaf-closeup%201.png')", // espaço escapado
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <p className="text-sm uppercase text-gray-300 tracking-widest mb-4 font-livvic">
          A EQUIPE QUE FAZ A DIFERENÇA
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 font-livvic">
          Conheça nosso time de especialistas
        </h2>

        {/* CARROSSEL (mesmo layout de grid) */}
        <div className="relative overflow-hidden">
          {/* trilho: cada página ocupa 100% da largura */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((grupo, gi) => (
              <div key={gi} className="flex-shrink-0 w-full">
                {/* grid por página preservando layout: 1/2/4 colunas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 place-items-center">
                  {grupo.map((p, i) => (
                    <Card key={i} p={p} />
                  ))}
                  {/* placeholders invisíveis para manter a malha na última página */}
                  {grupo.length < perView &&
                    Array.from({ length: perView - grupo.length }).map(
                      (_, k) => (
                        <div key={`ph-${k}`} className="opacity-0">
                          <Card p={grupo[0]} />
                        </div>
                      )
                    )}
                </div>
              </div>
            ))}
          </div>

          {/* Navegação */}
          {pages.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute top-1/3 -translate-y-1/2 left-0 rounded-full bg-white/10 hover:bg-white/20 text-white w-9 h-9 flex items-center justify-center backdrop-blur-md"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="absolute top-1/3 -translate-y-1/2 right-0 rounded-full bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center backdrop-blur-md"
              >
                ›
              </button>

              <div className="mt-6 flex justify-center gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Ir para a página ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      page === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/* =========================
   DEPOIMENTOS (imagem menor)
   ========================= */
const Depoimentos = () => {
  const testimonials = [
    {
      image: "/img/depoimentos/cli01.jpg",
      name: "Ana Ribeiro",
      role: "Paciente",
      text: "Experiência excelente! Profissionais atenciosos, explicam tudo com clareza e acompanham de perto a evolução do tratamento.",
    },
    {
      image: "/img/depoimentos/cli02.jpg",
      name: "Marcos Lima",
      role: "Paciente",
      text: "O cuidado individual fez toda diferença. Recomendo a todos que buscam um tratamento sério e baseado em evidências.",
    },
    {
      image: "/img/depoimentos/cli03.jpg",
      name: "Luciana Prado",
      role: "Responsável",
      text: "A equipe é muito humana. O acompanhamento contínuo trouxe segurança para nossa família durante todo o processo.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prevTestimonial = () =>
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setCurrent((i) => (i + 1) % testimonials.length);

  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      style={{
        // Cor + textura por cima (com alpha na cor)
        backgroundImage:
          "linear-gradient(rgba(70, 110, 69, 0.44), rgba(6, 10, 8, 0.38)), url('/img/textura.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#111", // fallback (atrás da textura)
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Títulos */}
        <div className="text-center mb-16">
          <p className="text-sm font-light text-white uppercase tracking-widest mb-3">
            NOSSOS DEPOIMENTOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-livvic leading-tight">
            O QUE NOSSOS CLIENTES ESTÃO DIZENDO
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Setas mais afastadas */}
          <button
            onClick={prevTestimonial}
            aria-label="Anterior"
            className="absolute -left-10 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/80 transition-colors"
          >
            <svg
              className="w-9 h-9 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Próximo"
            className="absolute -right-10 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 z-30 text-white hover:text-white/80 transition-colors"
          >
            <svg
              className="w-9 h-9 md:w-10 md:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide */}
          <div className="h-80 flex flex-col lg:flex-row items-center justify-center gap-12 px-8 md:px-12 lg:px-16">
            {/* Foto — tamanho anterior */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-xl">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover bg-gray-100"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="flex-1 max-w-3xl flex flex-col justify-center h-full">
              <div className="flex-1 flex items-center mb-6">
                <p className="text-lg sm:text-xl text-white leading-relaxed font-livvic text-left">
                  {testimonials[current].text}
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 font-livvic">
                  {testimonials[current].name}
                </h4>
                <p className="text-white/70 font-light text-base sm:text-lg">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   FAQ
   ========================= */

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({ 0: true });

  const faqItems = [
    {
      id: "cultural",
      title: "CULTURAL",
      content:
        "Venha explorar uma jornada pelas conexões históricas, artísticas e sociais que destacam a vertente cultural da cannabis, revelando uma das muitas faces dessa planta incrível.",
    },
    {
      id: "empreendedorismo",
      title: "EMPREENDEDORISMO",
      content:
        "Conteúdo sobre inovação, negócios e a cadeia produtiva, destacando oportunidades sustentáveis e o desenvolvimento do setor.",
    },
    {
      id: "medicinal",
      title: "MEDICINAL",
      content:
        "Informações sobre aplicações clínicas, pesquisa científica, bem-estar e acesso responsável a terapias baseadas em cannabis.",
    },
    {
      id: "socioambiental",
      title: "SOCIOAMBIENTAL",
      content:
        "Discussão sobre impactos ambientais positivos, regeneração de solos, materiais sustentáveis e responsabilidade social.",
    },
    {
      id: "plural",
      title: "PLURAL",
      content:
        "Um espaço inclusivo que reúne diferentes vozes, saberes e experiências para construir diálogo e conhecimento.",
    },
  ];

  const toggleItem = (index) => {
    const isOpen = !!openItems[index];
    const next = {};
    if (!isOpen) next[index] = true;
    setOpenItems(next);
  };

  return (
    <>
      <style jsx>{`
        .faq-section {
          background: url("/img/textura.png") center/cover no-repeat,
            /* imagem em cima */ linear-gradient(to bottom, #060706ce, #202e25ff); /* cor por baixo */
          color: #fff;
          font-family: "Livvic", sans-serif;
        }
        .faq-wrap {
          max-width: 980px;
          margin: 0 auto;
          padding: 48px 24px 96px;
        }
        .faq-eyebrow {
          font-family: "Livvic", sans-serif;
          font-size: clamp(28px, 4.2vw, 56px);
          text-transform: uppercase;
          margin: 8px 0 12px;
        }
        .faq-title {
          font-family: "Livvic", sans-serif;
          margin: 0 0 32px;
          line-height: 1.1;
          font-size: clamp(34px, 7.2vw, 72px);
          font-weight: 400;
        }
        .faq-title .white {
          color: #fff;
        }
        .faq-title .green {
          color: #a9c861;
        }
        .faq-accordion {
          margin-top: 36px;
          border-top: 2px solid #8fb54b;
        }
        .faq-item {
          border-bottom: 2px solid #8fb54b;
        }
        .faq-trigger {
          all: unset;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 0;
          cursor: pointer;
        }
        .faq-sign {
          font-family: "Livvic", sans-serif;
          font-size: clamp(22px, 3vw, 28px);
          line-height: 1;
          width: 28px;
          text-align: center;
        }
        .faq-label {
          font-family: "Livvic", sans-serif;
          font-size: clamp(22px, 3.6vw, 32px);
        }
        .faq-panel {
          padding: 0 0 22px 44px;
          max-width: 72ch;
          color: #e1f2e1;
          display: none;
          animation: slide 0.25s ease-out both;
        }
        .faq-item.open .faq-panel {
          display: block;
        }
        @keyframes slide {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-wrap">
          <h2 className="faq-title">
            <span className="white">Perguntas</span>
            <span className="green"> Frequentes</span>
          </h2>

          <section className="faq-accordion" aria-label="Categorias">
            {faqItems.map((item, index) => {
              const isOpen = !!openItems[index];
              return (
                <article
                  key={item.id}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(index)}
                  >
                    <span className="faq-sign" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className="faq-label">{item.title}</span>
                  </button>
                  <div className="faq-panel">{item.content}</div>
                </article>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
};

/* =========================
   PÁGINA
   ========================= */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <EDMAescada />
      <GruposCuidado />
      <VideoSection />
      <Especialistas />
      <Depoimentos />
      <FAQSection />
    </main>
  );
}