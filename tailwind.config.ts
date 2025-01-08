import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        heading: ['"Julius Sans One"', 'sans-serif'],
        body: ['"Rethink Sans"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#E56B55", // Vibrant Coral
          light: "#F7C7B6",   // Soft Peach
          dark: "#D04C30",    // Deep Terracotta
        },
        secondary: {
          DEFAULT: "#72C0A8", // Muted Teal
          dark: "#52342D",    // Deep Brown
          light: "#EADCD4",   // Warm Beige
        },
        accent: {
          DEFAULT: "#FF6A00", // Radiant Orange
          light: "#FFFFFF",   // Pure White
        },
      },
      fontSize: {
        // Headings
        'h1': ['48px', { lineHeight: '56px', fontWeight: '400' }],
        'h2': ['36px', { lineHeight: '44px', fontWeight: '400' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '400' }],
        'h4': ['22px', { lineHeight: '30px', fontWeight: '400' }],
        // Body
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        // UI
        'button': ['16px', { lineHeight: '24px', letterSpacing: '0.05em', textTransform: 'uppercase' }],
        'caption': ['12px', { lineHeight: '16px' }],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;