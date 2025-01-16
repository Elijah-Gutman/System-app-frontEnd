import { SignupLoginLogoutButton } from "./SignupLoginLogoutButton.jsx";
import { Modal } from "./Modal.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5173";
axios.defaults.withCredentials = true;

export function LandingPage() {
  const [selectedOption, setSelectedOption] = useState(""); // State for dropdown selection
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility
  const [quiz, setQuiz] = useState(null); // State to hold random quiz data
  const [questions, setQuestions] = useState([]); // State to hold quiz questions
  const [showConfetti, setShowConfetti] = useState(false); // State to trigger confetti
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Fetch random quiz and questions when the component loads
  useEffect(() => {
    axios
      .get("/quizzes/random")
      .then((response) => {
        setQuiz(response.data);

        // Fetch questions for the quiz
        return axios.get(`/quizzes/${response.data.id}/questions`);
      })
      .then((response) => {
        setQuestions(response.data);
        setError(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz or questions:", err);
        setError(true);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected dropdown option
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
      case "Option8":
        navigate("/systems/eighth");
        break;
      default:
        alert("Please select an option!");
    }

    setIsModalVisible(false); // Close the modal after submission
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setShowConfetti(true); // Trigger confetti
      setTimeout(() => setShowConfetti(false), 10000); // Show confetti for 10 seconds
    } else {
      alert("Incorrect!");
    }
  };

  if (error) {
    return <div className="text-center text-red-500">Failed to load the quiz. Please try again later.</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 min-h-screen relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500} // More confetti
          gravity={0.1} // Slower fall
          recycle={false} // Stop after one burst
        />
      )}

      {/* Header */}
      <header className="p-6 text-center bg-gray-800 dark:bg-gray-900 text-white shadow-md">
        <h1 className="text-4xl font-bold tracking-wider">Do you live your values?</h1>
        <p className="text-sm italic">Discover where you truly belong</p>
        <SignupLoginLogoutButton />
      </header>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto py-10 px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            Would you like to know how answering a question can tell me all about you?
          </h2>
          <p className="text-lg">Click the "Begin Evaluation" button to learn the best place for you to live!</p>
          <button
            onClick={() => setIsModalVisible(true)}
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
          >
            Begin Evaluation
          </button>
        </div>

        {/* Display Quiz */}
        {quiz && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center">{quiz.name}</h2>
            <p className="text-gray-700 mb-6 text-center">Answer the questions below:</p>
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={question.id} className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">
                    Question {index + 1}: {question.content}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {question.options.map((option, idx) => (
                      <li key={idx}>
                        <button
                          className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 rounded-md"
                          onClick={() => handleAnswer(option === question.answer)}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal */}
        <Modal show={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg mx-auto border-2 border-gray-300 dark:border-gray-600">
            <h2 className="text-lg font-bold mb-4 text-center">Answer the Question Below</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <label className="block">
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Select your answer:</span>
                <select
                  value={selectedOption}
                  onChange={handleChange}
                  className="block w-full mt-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Choose your value
                  </option>
                  <option value="Option1">I value responsibility</option>
                  <option value="Option2">I value peace</option>
                  <option value="Option3">I value homogeneity </option>
                  <option value="Option4">I value rigid hierarchy </option>
                  <option value="Option5">I value social norms</option>
                  <option value="Option6">I value investment</option>
                  <option value="Option7">I value beer </option>
                  <option value="Option8">View All Countries!</option>
                </select>
              </label>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white text-center p-4">
        <p>© 2024 System-App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
