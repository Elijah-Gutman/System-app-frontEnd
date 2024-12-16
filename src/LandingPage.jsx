import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SignupLoginLogoutButton } from "./SignupLoginLogoutButton.jsx";
import { Modal } from "./Modal.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5173";
axios.defaults.withCredentials = true;

export function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(""); // State for radio button selection
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected radio button
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    switch (selectedOption) {
      case "option1":
        //window.location.href("/signup");
        navigate("/signup");
        break;
      case "option2":
        navigate("/login");
        break;
    }
    //alert(`You selected: ${selectedOption}`); // Show selected option
    setIsModalVisible(false); // Close the modal after submission
  };

  return (
    <div>
      <SignupLoginLogoutButton />
      <h1>System-app</h1>
      <p>Welcome to System-app! This app allows you to view and create systems.</p>
      <p>Click the "Systems" link in the navigation bar to get started.</p>
      <button onClick={() => setIsModalVisible(true)}>Begin Evalution</button>
      <Modal show={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <h2>Do you enjoy responsibility? </h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={handleChange} />
              Option 1
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="option2" checked={selectedOption === "option2"} onChange={handleChange} />
              Option 2
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
