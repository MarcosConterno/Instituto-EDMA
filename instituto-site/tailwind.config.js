/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Habilita o modo JIT
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Verifica arquivos nas páginas
    "./components/**/*.{js,ts,jsx,tsx}", // Verifica arquivos nos componentes
  ],
  theme: {
    extend: {},
  },
  darkMode: "selector", // Usar o modo escuro com base no seletor
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ["var(--font-livvic)"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typingLoop: {
          "0%, 15%": { width: "0%" }, // começo: invisível
          "25%, 50%": { width: "100%" }, // texto completo visível
          "60%, 100%": { width: "0%" }, // desaparece
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typingLoop:
          "typingLoop 5s steps(11,end) infinite, blink .8s step-end infinite",
      },
    },
  },
  plugins: [],
};

//cursor piscando opacidade
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
  blink: {
    "0%, 50%, 100%": { opacity: 1 },
    "25%, 75%": { opacity: 0 },
  },
},
animation: {
  blink: "blink 1s step-start infinite",
},
    },
  },
  plugins: [],
};