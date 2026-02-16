/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0B0F14",
        surface: "#121A23",
        brand: {
          500: "#475569",
          600: "#334155",
        },
        accent: "#2DD4BF",
        ink: "#E6EAF0",
        muted: "#9AA6B2",
      },
      boxShadow: {
        glow: "0 0 40px rgba(45, 212, 191, .18)",
        card: "0 18px 60px rgba(0,0,0,.45)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 10% 10%, rgba(45, 212, 191, .06) 0%, transparent 45%), radial-gradient(circle at 90% 20%, rgba(51, 65, 85, .14) 0%, transparent 55%), radial-gradient(circle at 30% 90%, rgba(255,255,255,.04) 0%, transparent 50%)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        sans: ["Cairo", "Inter", "sans-serif"],
        heading: ["Cairo", "Outfit", "sans-serif"],
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
