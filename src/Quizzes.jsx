import { useEffect, useState } from "react";
import axios from "axios";

export function Quizzes() {
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch random quiz on component load
    axios
      .get("/quizzes/random")
      .then((response) => {
        setQuiz(response.data);
        setError(false);

        // Fetch questions for the quiz
        return axios.get(`/quizzes/${response.data.id}/questions`);
      })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((err) => {
        console.error("Error fetching quiz or questions:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return <div className="text-center text-red-500">Failed to load quiz. Please try again later.</div>;
  }

  if (!quiz) {
    return <div className="text-center text-gray-600">No quiz available at the moment. Please try again later.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.name}</h1>
      <p className="text-gray-700 mb-4">This quiz is ready for you. Start answering the questions below!</p>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">
              Question {index + 1}: {question.content}
            </h2>
            <ul className="mt-2 space-y-2">
              {question.options.map((option, idx) => (
                <li key={idx}>
                  <button
                    className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 rounded-md"
                    onClick={() => alert(option === question.answer ? "Correct!" : "Incorrect!")}
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
  );
}
