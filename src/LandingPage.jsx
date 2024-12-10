import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignupLoginLogoutButton } from "./SignupLoginLogoutButton.jsx";
import { Modal } from "./Modal.jsx";
import { useState } from "react";
import { SignupPage } from "./SignupPage.jsx";
import { AuthenticationPage } from "./AuthenticationPage";

export function LandingPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params.get("name"));
    if (params.get("name") === "system") {
      createRoot(document.getElementById("root")).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  };
  return (
    <div>
      <SignupLoginLogoutButton />
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
      <button onClick={() => setIsModalVisible(true)}>Start</button>
      <Modal show={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <h1>Modal</h1>
        <p>This is a modal</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
