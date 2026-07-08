import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A2342",
        cloud: "#E5E7EB",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(10, 35, 66, 0.18)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
