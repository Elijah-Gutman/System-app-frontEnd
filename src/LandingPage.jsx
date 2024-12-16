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
      case "Option1":
        //window.location.href("/signup");
        navigate("/systems/first");
        break;
      case "Option2":
        navigate("/systems");
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
              <input type="radio" value="Option1" checked={selectedOption === "Option1"} onChange={handleChange} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Option2" checked={selectedOption === "Option2"} onChange={handleChange} />
              No
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <h2>Do you believe wealth is a function of competence?</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input type="radio" value="Option3" checked={selectedOption === "Option3"} onChange={handleChange} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Option4" checked={selectedOption === "Option4"} onChange={handleChange} />
              No
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <h2>Do you believe rights are inalienable?</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              <input type="radio" value="Option5" checked={selectedOption === "Option5"} onChange={handleChange} />
              Yes
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Option6" checked={selectedOption === "Option6"} onChange={handleChange} />
              No
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}
