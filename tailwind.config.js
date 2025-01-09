/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Include all necessary files
  theme: {
    extend: {
      colors: {
        // Optional: Add custom dark mode colors
        darkBackground: "#1a202c",
        darkText: "#a0aec0",
        lightBackground: "#f7fafc",
        lightText: "#2d3748",
      },
    },
  },
  plugins: [],
};
