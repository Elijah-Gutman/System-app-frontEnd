import { Clock } from "./Clock"; // Adjust the path based on your folder structure
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input

  // Map country names to routes
  const countryRoutes = {
    USA: "/systems/first",
    Canada: "/systems/second",
    Sweden: "/systems/third",
    Russia: "/systems/fourth",
    Japan: "/systems/fifth",
    Luxembourg: "/systems/sixth",
    Germany: "/systems/seventh",
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const route = countryRoutes[searchTerm.trim()]; // Match the input to a route
    if (route) {
      navigate(route); // Navigate to the matching route
    } else {
      alert("Country not found. Please enter a valid country name."); // Handle invalid input
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

      {/* Dark Mode Toggle and Search */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-300 transition"
        >
          {isDarkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search country..."
            className="text-black rounded-md px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
