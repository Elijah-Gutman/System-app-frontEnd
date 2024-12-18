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
        navigate("/systems/first");
        break;
      case "Option2":
        navigate("/systems/second");
        break;
      case "Option3":
        navigate("/systems/third");
        break;
      case "Option4":
        navigate("/systems/fourth");
        break;
      case "Option5":
        navigate("/systems/fifth");
        break;
      case "Option6":
        navigate("/systems/sixth");
        break;
      case "Option7":
        navigate("/systems/seventh");
        break;
    }

    setIsModalVisible(false); // Close the modal after submission
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 min-h-screen">
      <header className="p-6 text-center bg-gray-800 text-white shadow-md">
        <h1 className="text-4xl font-bold tracking-wider">Do you live your values?</h1>
        <p className="text-sm italic">Discover where you truly belong</p>
        <SignupLoginLogoutButton />
      </header>
      <main className="max-w-4xl mx-auto py-10 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Would you like to know how answering a question can tell me all about you?
          </h2>
          <p className="text-lg mb-6">Click the "Begin Evaluation" button to learn the best place for you to live!</p>
          <button
            onClick={() => setIsModalVisible(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Begin Evaluation
          </button>
        </div>
        <Modal show={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto border-2 border-gray-300">
            <h2 className="text-lg font-bold mb-4 text-center">Answer the Questions Below</h2>
            {/* Question 1 */}
            <form onSubmit={handleFormSubmit} className="mb-6">
              <h3 className="font-semibold mb-2">Do you enjoy responsibility?</h3>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option1"
                    checked={selectedOption === "Option1"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option2"
                    checked={selectedOption === "Option2"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Submit
              </button>
            </form>
            {/* Question 2 */}
            <form onSubmit={handleFormSubmit} className="mb-6">
              <h3 className="font-semibold mb-2">Do you believe wealth is a function of competence?</h3>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option3"
                    checked={selectedOption === "Option3"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option4"
                    checked={selectedOption === "Option4"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Submit
              </button>
            </form>
            {/* Question 3 */}
            <form onSubmit={handleFormSubmit}>
              <h3 className="font-semibold mb-2">Do you believe rights are inalienable?</h3>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option5"
                    checked={selectedOption === "Option5"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option6"
                    checked={selectedOption === "Option6"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  No
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Option7"
                    checked={selectedOption === "Option7"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Depends
                </label>
              </div>
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 System-App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// UNSTYLED CODE BELOW - FOR REFERENCE ONLY
// UNSTYLED CODE BELOW - FOR REFERENCE ONLY
// UNSTYLED CODE BELOW - FOR REFERENCE ONLY
// UNSTYLED CODE BELOW - FOR REFERENCE ONLY
// import { SignupLoginLogoutButton } from "./SignupLoginLogoutButton.jsx";
// import { Modal } from "./Modal.jsx";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// axios.defaults.baseURL = "http://localhost:5173";
// axios.defaults.withCredentials = true;

// export function LandingPage() {
//   const [selectedOption, setSelectedOption] = useState(""); // State for radio button selection
//   const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value); // Update the selected radio button
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     switch (selectedOption) {
//       case "Option1":
//         //window.location.href("/signup");
//         navigate("/systems/first");
//         break;
//       case "Option2":
//         navigate("/systems/second");
//         break;
//       case "Option3":
//         navigate("/systems/third");
//         break;
//       case "Option4":
//         navigate("/systems/fourth");
//         break;
//       case "Option5":
//         navigate("/systems/fifth");
//         break;
//       case "Option6":
//         navigate("/systems/sixth");
//         break;
//       case "Option7":
//         navigate("/systems/seventh");
//         break;
//     }
//     //alert(`You selected: ${selectedOption}`); // Show selected option
//     setIsModalVisible(false); // Close the modal after submission
//   };

//   return (
//     <div>
//       <SignupLoginLogoutButton />
//       <h1>System-app</h1>
//       <p>Would you like to know how answering a question can tell me all about you?</p>
//       <p>Click the "Begin evaluation" button to learn the best place for you to live! </p>
//       <button onClick={() => setIsModalVisible(true)}>Begin Evalution</button>
//       <Modal show={isModalVisible} onClose={() => setIsModalVisible(false)}>
//         <h2>Do you enjoy responsibility? </h2>
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label>
//               <input type="radio" value="Option1" checked={selectedOption === "Option1"} onChange={handleChange} />
//               Yes
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="radio" value="Option2" checked={selectedOption === "Option2"} onChange={handleChange} />
//               No
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         <h2>Do you believe wealth is a function of competence?</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label>
//               <input type="radio" value="Option3" checked={selectedOption === "Option3"} onChange={handleChange} />
//               Yes
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="radio" value="Option4" checked={selectedOption === "Option4"} onChange={handleChange} />
//               No
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         <h2>Do you believe rights are inalienable?</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label>
//               <input type="radio" value="Option5" checked={selectedOption === "Option5"} onChange={handleChange} />
//               Yes
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="radio" value="Option6" checked={selectedOption === "Option6"} onChange={handleChange} />
//               No
//             </label>
//             <label>
//               <input type="radio" value="Option7" checked={selectedOption === "Option7"} onChange={handleChange} />
//               Depends
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }
