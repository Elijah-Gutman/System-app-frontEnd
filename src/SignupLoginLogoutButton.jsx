import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthenticationPage } from "./AuthenticationPage.jsx";
import { LogoutLink } from "./LogoutLink.jsx";

export function SignupLoginLogoutButton() {
  const handleShow = (system) => {
    console.log("handleShow", system);
  };

  return (
    <div className="flex justify-center items-center gap-4 p-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg rounded-lg">
      <button
        onClick={() =>
          createRoot(document.getElementById("root")).render(
            <StrictMode>
              <AuthenticationPage />
            </StrictMode>
          )
        }
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold shadow-md transition-all"
      >
        Authentication
      </button>
      <button
        onClick={() =>
          createRoot(document.getElementById("root")).render(
            <StrictMode>
              <LogoutLink />
            </StrictMode>
          )
        }
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold shadow-md transition-all"
      >
        Logout
      </button>
    </div>
  );
}
