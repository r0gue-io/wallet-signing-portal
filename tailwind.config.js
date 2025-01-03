/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pink: {
          "50": "#fff0fa",
          "100": "#ffe4f6",
          "200": "#ffc9ef",
          "300": "#ff9ce0",
          "400": "#ff5fc9",
          "500": "#ff30b1",
          "600": "#f50d8f",
          "700": "#e6007a", // base
          "800": "#b0045d",
          "900": "#920950",
          "950": "#5b002c",
        },
        blue: {
          "50": "#effaff",
          "100": "#def4ff",
          "200": "#b6ecff",
          "300": "#75e0ff",
          "400": "#2cd1ff",
          "500": "#00c2ff", // base
          "600": "#0097d4",
          "700": "#0078ab",
          "800": "#00658d",
          "900": "#065474",
          "950": "#04354d",
        },
        violet: {
          "50": "#ebe8ff",
          "100": "#dad4ff",
          "200": "#c0b2ff",
          "300": "#a085ff",
          "400": "#8c55ff",
          "500": "#842eff",
          "600": "#850bff",
          "700": "#8402ff",
          "800": "#6905ce",
          "900": "#530fa0",
          "950": "#1c0533", // base
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),],
}