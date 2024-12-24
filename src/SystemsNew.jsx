import { useNavigate } from "react-router-dom";

export function SystemsNew({ onCreate }) {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);

    // onCreate(params, () => {
    event.target.reset();
    navigate("/"); // Redirect to LandingPage after creation
    // });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/08/20/03/parthenon-1245713_1280.jpg')`, // Replace with a Greco-Roman image
      }}
    >
      <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 border border-gray-300 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Would you like to add a country?</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Country Name</span>
              <input
                name="country_name"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter country name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Economic System</span>
              <input
                name="economic_system"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter economic system"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Governmental System</span>
              <input
                name="governmental_system"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter governmental system"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Cultural System</span>
              <input
                name="cultural_system"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter cultural system"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Image URL</span>
              <input
                name="image_url"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-gray-800">Wiki Page</span>
              <input
                name="wiki_page"
                type="text"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter wiki page URL"
              />
            </label>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
