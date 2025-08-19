/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Habilita o modo JIT
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Verifica arquivos nas páginas
    './components/**/*.{js,ts,jsx,tsx}', // Verifica arquivos nos componentes
  ],
  theme: {
    extend: {},
  },
  darkMode: 'selector', // Usar o modo escuro com base no seletor
  plugins: [],
}
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ['var(--font-livvic)'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        // digita uma vez e mantém (both) + cursor piscando infinito
        typing: "typing 2.5s steps(20, end) both, blink .8s step-end infinite",
        // se quiser em loop: "typing 2.2s steps(20, end) infinite alternate, blink .7s step-end infinite"
      },
    },
  },
  plugins: [],
};

