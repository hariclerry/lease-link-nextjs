/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      backgroundImage: {
        'gradient-custom': "var(--gradient-bg)",
      },
      colors: {
        background: {
          background: "var(--background)",
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          dark: "var(--bg-dark)",
          blue: "var(--bg-light-blue)"
        },
        text: {
          foreground: "var(--foreground)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          green: "var(--text-primary-green)"
        },
        'my-light-blue': '#56c8f5', 
        button: {
          primary: {
            bg: "var(--btn-primary-bg)",
            text: "var(--btn-primary-text)",
            border: "var(--btn-primary-border)",
          },
          secondary: {
            bg: "var(--btn-secondary-bg)",
            text: "var(--btn-secondary-text)",
            border: "var(--btn-secondary-border)",
          },
          outline: {
            bg: "var(--btn-outline-bg)",
            text: "var(--btn-outline-text)",
            border: "var(--btn-outline-border)",
          }
        },
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
