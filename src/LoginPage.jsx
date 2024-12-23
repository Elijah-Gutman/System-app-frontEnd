import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        window.location.href = "/"; // Redirect to homepage
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div
      id="login"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800"
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h1>
        {errors.length > 0 && (
          <ul className="mb-4 text-red-500">
            {errors.map((error) => (
              <li key={error} className="text-sm">
                {error}
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// import axios from "axios";
// import { useState } from "react";
// import { AuthenticationPage } from "./AuthenticationPage";

// export function LoginPage() {
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors([]);
//     const params = new FormData(event.target);
//     axios
//       .post("/sessions.json", params)
//       .then((response) => {
//         console.log(response.data);
//         localStorage.setItem("email", response.data.email);
//         event.target.reset();
//         window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
//       })
//       .catch((error) => {
//         console.log(error.response);
//         setErrors(["Invalid email or password"]);
//       });
//   };

//   return (
//     <div id="login">
//       <h1>Login</h1>
//       <ul>
//         {errors.map((error) => (
//           <li key={error}>{error}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Email: <input name="email" type="email" />
//         </div>
//         <div>
//           Password: <input name="password" type="password" />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
