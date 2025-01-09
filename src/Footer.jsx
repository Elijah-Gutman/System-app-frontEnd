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
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [...messages, { role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      // Add AI response
      setMessages([
        ...messages,
        { role: "user", content: input },
        { role: "assistant", content: response.data.choices[0].message.content },
      ]);
      setInput(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <footer className="w-full text-center p-4 bg-gray-100 border-t">
      <p className="text-gray-600 text-sm mb-4">Copyright 2024</p>

      {/* Chatbox */}
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <div className="h-48 overflow-y-auto border-b mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === "assistant" ? "text-blue-600" : "text-gray-800"}`}>
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
            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
}
