/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#045389",
          primaryDark: "#033B62",
          buttonPrimary: "#FF9F0A",
          buttonPrimaryDark: "#E08200",
          secondary: "#38BDF8",
        },

        surface: {
          background: "#F8FAFC",
          surface: "#FFFFFF",
          textPrimary: "#08192C",
          textMuted: "#64748B",
          border: "#E2E8F0",
        },

        status: {
          success: "#16A34A",
          successBg: "#F0FDF4",
          warning: "#FF9F0A",
          error: "#DC2626",
          errorBg: "#FEF2F2",
        },
      },

      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        input: "30px",
        full: "9999px",
      },

      spacing: {
        1: "3px",
        2: "6px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "24px",
        7: "32px",
        8: "48px",
      },
    },
  },
  plugins: [],
};
