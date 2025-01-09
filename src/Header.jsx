import { Clock } from "./Clock"; // Adjust the path based on your folder structure
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg flex justify-between items-center relative">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Home
      </button>
      {/* Clock */}
      <div className="absolute top-4 right-4">
        <div className="w-40 h-40 bg-white rounded-full shadow-lg p-2 flex items-center justify-center">
          <Clock />
        </div>
      </div>
    </header>
  );
}
