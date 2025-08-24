import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tratamento", path: "/tratamento" },
  { name: "Sobre nós", path: "/oInstituto" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  // Fundo do header: cheio no topo, translúcido ao rolar
  const topBg = "bg-gradient-to-b from-[#111A17] via-[#1a2522] to-[#2d3b34]";
  const scrolledBg =
    "bg-gradient-to-b from-[#111A17]/70 via-[#1a2522]/50 to-[#2d3b34]/30 backdrop-blur-sm";

  const isAssociese = router.pathname === "/associese";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white font-livvic border-b-0 shadow-none transition-all duration-300 ${
        scrolling ? scrolledBg : topBg
      }`}
      style={{ borderBottom: "none", boxShadow: "none" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo clicável */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center justify-center rounded cursor-pointer">
              <img
                src="/img/novas/LogoHorizontalCor4.svg"
                alt="EDMA Instituto - Educação Ortodontia Medicina Avançada"
                className="h-16 w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ name, path }) => (
            <Link key={path} href={path} aria-current={router.pathname === path ? "page" : undefined}>
              <div
                className={`relative pb-1 cursor-pointer transition-all duration-200 text-lg ${
                  router.pathname === path
                    ? "font-bold border-b-2 border-[#D8BC83]"
                    : "hover:border-b-2 hover:border-[#D8BC83]"
                }`}
              >
                {name}
              </div>
            </Link>
          ))}

          <Link href="/associese" aria-current={isAssociese ? "page" : undefined}>
            <button
              className={`w-full px-6 py-3 mt-0 rounded-full text-lg md:text-xl font-semibold font-livvic transition-colors duration-300 border-2
                ${
                  isAssociese
                    ? "bg-white text-[#324530] border-white"
                    : "text-white border-white hover:bg-white hover:text-[#324530]"
                }`}
            >
              Associe-se
            </button>
          </Link>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#324530]/95 backdrop-blur-sm text-white px-6 py-4 space-y-4 transition-all duration-300">
          {navItems.map(({ name, path }) => (
            <Link key={path} href={path} aria-current={router.pathname === path ? "page" : undefined}>
              <div
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block cursor-pointer transition-all duration-200 pb-1 text-lg ${
                  router.pathname === path
                    ? "font-bold border-b-2 border-[#D8BC83]"
                    : "hover:border-b-2 hover:border-[#D8BC83]"
                }`}
              >
                {name}
              </div>
            </Link>
          ))}

          <Link href="/associese" aria-current={isAssociese ? "page" : undefined}>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full px-6 py-3 mt-2 rounded-full text-lg md:text-xl font-semibold font-livvic transition-colors duration-300 border-2
                ${
                  isAssociese
                    ? "bg-white text-[#324530] border-white"
                    : "text-white border-white hover:bg-white hover:text-[#324530]"
                }`}
            >
              Associe-se
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
