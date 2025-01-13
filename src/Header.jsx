import { Clock } from "./Clock"; // Adjust the path based on your folder structure
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="bg-blue-600 dark:bg-gray-900 text-white dark:text-gray-100 p-4 shadow-lg flex justify-between items-center relative">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-white dark:bg-gray-700 text-blue-600 dark:text-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      >
        Home
      </button>

      {/* Clock */}
      <div className="absolute top-4 right-4">
        <div className="w-40 h-40 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center justify-center">
          <Clock />
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition"
        >
          {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
      </div>
    </header>
  );
}
