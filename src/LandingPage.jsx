import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export function LandingPage() {
  return (
    <div>
      <h1>System-app</h1>
      <p>Welcome to System-app! This app allows you to view and create systems.</p>
      <p>Click the "Systems" link in the navigation bar to get started.</p>
      <button
        onClick={() =>
          createRoot(document.getElementById("root")).render(
            <StrictMode>
              <App />
            </StrictMode>
          )
        }
      >
        Click me
      </button>
    </div>
  );
}
