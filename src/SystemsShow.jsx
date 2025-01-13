import { useNavigate } from "react-router-dom";

export function SystemsShow({ system, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(system, params, () => event.target.reset());
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-fixed bg-cover bg-gray-100 dark:bg-gray-900"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/08/20/03/parthenon-1245713_1280.jpg')`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm relative flex">
        {/* Sidebar with Buttons */}
        <div className="flex flex-col space-y-4 mr-6">
          <button
            type="submit"
            form="update-form"
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleNavigation}
            className="px-4 py-2 bg-gray-600 dark:bg-gray-500 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            Home
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
            <div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-gray-100">Country Name:</span> {system.country_name}
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-gray-100">Economic System:</span> {system.economic_system}
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-gray-100">Cultural System:</span> {system.cultural_system}
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-gray-100">Wiki Page:</span>{" "}
                <a href={system.wiki_page} target="_blank" className="text-blue-500 dark:text-blue-400 underline">
                  Link
                </a>
              </p>
            </div>
            <div>
              <img
                src={system.image_url}
                alt={system.country_name}
                className="w-full h-64 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">Update Information</h2>
          <form onSubmit={handleSubmit} id="update-form" className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Country Name</span>
                <input
                  defaultValue={system.country_name}
                  name="country_name"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Economic System</span>
                <input
                  defaultValue={system.economic_system}
                  name="economic_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Governmental System</span>
                <input
                  defaultValue={system.governmental_system}
                  name="governmental_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Cultural System</span>
                <input
                  defaultValue={system.cultural_system}
                  name="cultural_system"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Image URL</span>
                <input
                  defaultValue={system.image_url}
                  name="image_url"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
              <label className="block">
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">Wiki Page URL</span>
                <input
                  defaultValue={system.wiki_page}
                  name="wiki_page"
                  type="text"
                  className="mt-1 block w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
