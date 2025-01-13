import { useState } from "react";
import axios from "axios";

export function Footer() {
  const [messages, setMessages] = useState([]); // Chat messages
  const [input, setInput] = useState(""); // User input

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);

    try {
      const response = await axios.post(
        "http://localhost:3000/chatbot", // Replace with your backend's URL
        { message: input } // Send only the user input to the backend
      );

      const reply = response.data.reply; // Extract the reply from the backend response

      // Add AI response
      setMessages([...messages, { role: "user", content: input }, { role: "assistant", content: reply }]);

      setInput(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error);

      // Optionally, add an error message to the chat
      setMessages([
        ...messages,
        { role: "user", content: input },
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <footer className="w-full text-center p-4 bg-gray-100 dark:bg-gray-900 border-t dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">© 2024 System-App. All Rights Reserved.</p>

      {/* Chatbox */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
        <div className="h-48 overflow-y-auto border-b mb-4 border-gray-300 dark:border-gray-600">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.role === "assistant" ? "text-blue-600 dark:text-blue-300" : "text-gray-800 dark:text-gray-100"
              }`}
            >
              <strong>{msg.role === "assistant" ? "AI" : "You"}:</strong> {msg.content}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition"
          >
            Send
          </button>
        </div>
      </div>
    </footer>
  );
}
