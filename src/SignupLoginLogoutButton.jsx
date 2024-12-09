import { Modal } from "./Modal.jsx";
import { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthenticationPage } from "./AuthenticationPage.jsx";
import { LogoutLink } from "./LogoutLink.jsx";

export function SignupLoginLogoutButton() {
  const handleShow = (system) => {
    console.log("handleShow", system);
  };
  // useEffect(handleIndex, []);
  return (
    <div>
      <button
        onClick={() =>
          createRoot(document.getElementById("root")).render(
            <StrictMode>
              <AuthenticationPage />
            </StrictMode>
          )
        }
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
      >
        Logout
      </button>
    </div>
  );
}
