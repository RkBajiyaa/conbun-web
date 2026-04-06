/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#944a00",
        "primary-container": "#f28c38",
        "surface": "#fbf9f8",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#554337",
        "surface-container": "#efeded",
        "surface-container-low": "#f5f3f3",
        "surface-container-highest": "#e4e2e2",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#ffdcc5",
        "on-primary-fixed": "#301400",
        "on-primary-fixed-variant": "#713700",
        "outline-variant": "#dbc2b2",
        "secondary": "#944a26",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};