import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LandingPage } from "./LandingPage.jsx";

const landingPage = () => {
  location.replace = createRoot(document.getElementById("root")).render(
    <StrictMode>
      <LandingPage />
    </StrictMode>
  );
};

export function SystemsShow({ system, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(system, params, () => event.target.reset());
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/08/20/03/parthenon-1245713_1280.jpg')`, // Replace with a Greco-Roman image
      }}
    >
      <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 border border-gray-200 backdrop-blur-sm relative flex">
        {/* Sidebar with Buttons */}
        <div className="flex flex-col space-y-4 mr-6">
          <button
            type="submit"
            form="update-form"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Update
          </button>
          <button
            type="button"
            onClick={landingPage}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
          >
            Home
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Country Name:</span> {system.country_name}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Economic System:</span> {system.economic_system}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Cultural System:</span> {system.cultural_system}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="text-gray-900">Wiki Page:</span>{" "}
                <a href={system.wiki_page} target="_blank" className="text-blue-500 underline">
                  Link
                </a>
              </p>
            </div>
            <div>
              <img
                src={system.image_url}
                alt={system.country_name}
                className="w-full h-64 object-cover rounded-lg border border-gray-300"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Update Information</h2>
          <form onSubmit={handleSubmit} id="update-form" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Country Name</span>
                <input
                  defaultValue={system.country_name}
                  name="country_name"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Economic System</span>
                <input
                  defaultValue={system.economic_system}
                  name="economic_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Governmental System</span>
                <input
                  defaultValue={system.governmental_system}
                  name="governmental_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Cultural System</span>
                <input
                  defaultValue={system.cultural_system}
                  name="cultural_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Image URL</span>
                <input
                  defaultValue={system.image_url}
                  name="image_url"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800">Wiki Page URL</span>
                <input
                  defaultValue={system.wiki_page}
                  name="wiki_page"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//UNSTYLED CODE BELOW FOR REFERANCE ONLY
//UNSTYLED CODE BELOW FOR REFERANCE ONLY
//UNSTYLED CODE BELOW FOR REFERANCE ONLY
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { LandingPage } from "./LandingPage.jsx";

// const landingPage = () => {
//   location.replace = createRoot(document.getElementById("root")).render(
//     <StrictMode>
//       <LandingPage />
//     </StrictMode>
//   );
// };

// export function SystemsShow({ system, onUpdate }) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     onUpdate(system, params, () => event.target.reset());
//   };
//   return (
//     <div>
//       <h1>Country</h1>
//       <p>Country Name: {system.country_name}</p>
//       <p>Economic System: {system.economic_system}</p>
//       <p>Cultural System: {system.cultural_system}</p>
//       <p>
//         Image: <img src={system.image_url} alt="" />
//       </p>
//       <p>WikiPage: {system.wiki_page}</p>

//       <form onSubmit={handleSubmit}>
//         <div>
//           Country Name: <input defaultValue={system.country_name} name="country_name" type="text" />
//         </div>
//         <div>
//           Economic System : <input defaultValue={system.economic_system} name="economic_system" type="text" />
//         </div>
//         <div>
//           Governmental System:
//           <input defaultValue={system.governmental_system} name="governmental_system" type="text" />
//         </div>
//         <div>
//           Cultural System: <input defaultValue={system.cultural_system} name="cultural_system" type="text" />
//         </div>
//         <div>
//           Image: <input defaultValue={system.image_url} name="image_url" type="text" />
//         </div>
//         <div>
//           WikiPage: <input defaultValue={system.wiki_page} name="wiki_page" type="text" />
//         </div>
//         <button type="submit">Update</button>
//         <button onClick={landingPage}>Home</button> | <a href="#">Link</a>
//       </form>
//     </div>
//   );
// }
