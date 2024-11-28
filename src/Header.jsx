import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LandingPage } from "./LandingPage.jsx";

const landingPage = () => {
  location.replace = createRoot(document.getElementById("root")).render(
    <StrictMode>
      <LandingPage />
    </StrictMode>
  );
};

export function Header() {
  return (
    <header>
      <nav>
        <button onClick={landingPage}>Home</button> | <a href="#">Link</a>
      </nav>
    </header>
  );
}
