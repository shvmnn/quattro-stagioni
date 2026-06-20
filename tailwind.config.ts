import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E8",
        "cream-deep": "#EFE6D6",
        green: "#214E34",
        "green-deep": "#173A26",
        wine: "#8B1E24",
        "wine-deep": "#6E161B",
        gold: "#C7A96B",
        "gold-soft": "#D9C089",
        charcoal: "#1D1D1D",
        "charcoal-soft": "#3A3A36",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(29,29,29,0.35)",
        card: "0 24px 60px -28px rgba(33,78,52,0.45)",
        lift: "0 30px 70px -30px rgba(29,29,29,0.5)",
      },
      backgroundImage: {
        "warm-fade":
          "linear-gradient(180deg, rgba(29,29,29,0.15) 0%, rgba(29,29,29,0.35) 45%, rgba(29,29,29,0.75) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        grow: "grow 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
