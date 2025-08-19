import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#111A17" }} className="text-white font-sans">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 py-10">

        {/* Links (no mobile ficam no topo) */}
        <nav
          className="
            order-1 lg:order-2
            w-full lg:w-auto
            mb-6 lg:mb-0
            flex flex-wrap lg:flex-row items-center justify-center gap-3 lg:gap-5
            font-livvic
          "
          aria-label="Navegação do site"
        >
          <a
            href="/"
            className="
              text-base md:text-lg px-4 py-2 rounded-full
              transition-all duration-300
              hover:bg-white hover:text-[#324530]
              hover:shadow-lg hover:shadow-black/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-[0.98]
            "
          >
            Home
          </a>
          <a
            href="/tratamento"
            className="
              text-base md:text-lg px-4 py-2 rounded-full
              transition-all duration-300
              hover:bg-white hover:text-[#324530]
              hover:shadow-lg hover:shadow-black/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-[0.98]
            "
          >
            Tratamento
          </a>
          <a
            href="/oInstituto"
            className="
              text-base md:text-lg px-4 py-2 rounded-full
              transition-all duration-300
              hover:bg-white hover:text-[#324530]
              hover:shadow-lg hover:shadow-black/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-[0.98]
            "
          >
            Sobre
          </a>
          <a
            href="/associese"
            className="
              text-base md:text-lg px-5 py-2 rounded-full border-2 border-white
              transition-all duration-300
              hover:bg-white hover:text-[#324530]
              hover:shadow-lg hover:shadow-black/20
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-[0.98]
              font-semibold
            "
          >
            Associe-se
          </a>
        </nav>

        {/* Logo + descrição (no mobile ficam abaixo dos links) */}
        <div
          className="
            order-2 lg:order-1
            flex flex-col items-center lg:items-start
            text-center lg:text-left
            mb-6 lg:mb-0
          "
        >
          <div className="flex items-center mb-4">
            <img
              src="/img/novas/LogoHorizontalCor3.svg"
              alt="Logo Instituto EDMA"
              className="h-24 w-auto md:h-28"
              loading="lazy"
            />
          </div>
          <p className="text-sm max-w-sm font-livvic opacity-90">
            O Instituto EDMA tem como missão promover a educação e o desenvolvimento sustentável em diversas áreas do conhecimento.
          </p>
        </div>

        {/* Redes sociais (no mobile ficam no final, centralizadas) */}
        <div
          className="
            order-3
            flex items-center justify-center lg:justify-end
            gap-4
          "
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              text-2xl p-2 rounded-full
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-95
            "
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="
              text-2xl p-2 rounded-full
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-95
            "
            title="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-2xl p-2 rounded-full
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A17]
              active:scale-95
            "
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ backgroundColor: "#111A17" }} className="text-center py-4 font-livvic border-t border-white/10">
        <p className="text-sm opacity-90">&copy; {currentYear} Instituto EDMA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
