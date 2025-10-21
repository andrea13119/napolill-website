import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "var(--primary-teal)",
          DEFAULT: "var(--primary)",
        },
        secondary: {
          purple: "var(--secondary-purple)",
          DEFAULT: "var(--secondary)",
        },
        accent: {
          rose: "var(--accent-rose)",
          DEFAULT: "var(--accent)",
        },
        background: {
          dark: "var(--background-dark)",
          DEFAULT: "var(--background)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
        },
        text: {
          light: "var(--text-light)",
          dark: "var(--text-dark)",
        },
        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
        },
        card: {
          bg: "var(--card-bg)",
          border: "var(--card-border)",
        },
        button: {
          bg: "var(--button-bg)",
          text: "var(--button-text)",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fadeInUp": "fadeInUp 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "50%": { opacity: "0.8", transform: "translateY(0px)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "napolill-gradient": "linear-gradient(135deg, var(--primary-teal) 0%, var(--secondary-purple) 100%)",
        "icon-gradient": "var(--icon-gradient)",
        "brain-gradient-blue-purple": "var(--gradient-blue-purple)",
        "brain-gradient-purple-pink": "var(--gradient-purple-pink)",
        "brain-gradient-blue-pink": "var(--gradient-blue-pink)",
        "napolill-dark-gradient": "var(--gradient-napolill-dark)",
        "mood-angry": "linear-gradient(135deg, #ff4757 0%, #ff3742 100%)",
        "mood-sad": "linear-gradient(135deg, #3742fa 0%, #2f3542 100%)",
        "mood-passive": "linear-gradient(135deg, #a4b0be 0%, #747d8c 100%)",
        "mood-happy": "linear-gradient(135deg, #ffa502 0%, #ff6348 100%)",
        "mood-euphoric": "linear-gradient(135deg, #ff6348 0%, #ff4757 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
