import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "card-side-menu": "20px"
      },
      colors: {
        brand: {
          primary: "#A67E59",
          DEFAULT: "#A67E59",
        },
        critical: "#B71C1C",
        subtitle: "#757575",
        primary: "#212121",
        secondary: "#757575",
        tertiary: "#EEEEEE"
      },
      fontSize: {
        "profile-header": ['28px', '42px'],
        "modal-header": ['32px', '48px'],
      }
    },
  },
  plugins: [],
};
export default config;
