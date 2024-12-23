import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Redirect to homepage
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      id="signup"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800"
    >
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Signup</h1>
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
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="password_confirmation" className="text-sm font-semibold">
              Password Confirmation
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

// import axios from "axios";
// import { useState } from "react";

// export function SignupPage() {
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors([]);
//     const params = new FormData(event.target);
//     axios
//       .post("/users.json", params)
//       .then((response) => {
//         console.log(response.data);
//         event.target.reset();
//         window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
//       })
//       .catch((error) => {
//         console.log(error.response.data.errors);
//         setErrors(error.response.data.errors);
//       });
//   };

//   return (
//     <div id="signup">
//       <h1>Signup</h1>
//       <ul>
//         {errors.map((error) => (
//           <li key={error}>{error}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name: <input name="name" type="text" />
//         </div>
//         <div>
//           Email: <input name="email" type="email" />
//         </div>
//         <div>
//           Password: <input name="password" type="password" />
//         </div>
//         <div>
//           Password confirmation: <input name="password_confirmation" type="password" />
//         </div>
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }
