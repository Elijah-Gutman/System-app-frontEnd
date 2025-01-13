import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100">
      <a
        href="#"
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold text-lg rounded-md shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        Logout
      </a>
    </div>
  );
}
