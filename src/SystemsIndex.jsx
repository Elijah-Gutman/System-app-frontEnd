import { useState, useEffect } from "react";

export function SystemsIndex({ systems, onShow }) {
  const [countryData, setCountryData] = useState(null);

  async function fetchCountryData(countryName) {
    if (!countryName) return;

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`);
      const data = await response.json();
      console.log(`Rest Countries API Data for ${countryName}:`, data);
      setCountryData(data[0] || null); // Set the first result or null if no result
    } catch (error) {
      console.error(`Error fetching Rest Countries data for ${countryName}:`, error);
      setCountryData(null);
    }
  }

  useEffect(() => {
    if (systems.length > 0) {
      const firstCountry = systems[0]?.country_name;
      fetchCountryData(firstCountry);
    }
  }, [systems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 relative">
      <div className="flex flex-col items-center p-6">
        {systems.map((system) => (
          <div
            key={system.id}
            className="w-full max-w-5xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-2xl rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 my-8 relative"
          >
            {/* Distinct Background */}
            <div className="absolute inset-0 bg-blue-100 dark:bg-gray-700 -z-10 rounded-xl opacity-80"></div>

            {/* Map Section */}
            <div className="w-full h-96 overflow-hidden rounded-t-xl">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDb0i4jq4aGVRsRrw-bmkV2-wN0upDZFa8&q=${system.country_name}`}
                title={`Google Map of ${system.country_name}`}
                className="w-full h-full border-none rounded-t-xl"
                allowFullScreen
              ></iframe>
            </div>

            {/* Information Section */}
            <div className="p-8">
              <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center">
                {system.country_name || "Unknown Country"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                <span className="font-semibold text-gray-800 dark:text-gray-100">Economic System:</span>{" "}
                {system.economic_system || "N/A"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                <span className="font-semibold text-gray-800 dark:text-gray-100">Governmental System:</span>{" "}
                {system.governmental_system || "N/A"}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                <span className="font-semibold text-gray-800 dark:text-gray-100">Cultural System:</span>{" "}
                {system.cultural_system || "N/A"}
              </p>

              {/* Display API Data Conditionally */}
              {systems[0]?.id === system.id && countryData && (
                <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mb-8 border border-blue-200 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Rest Countries API Integrated Information:
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Capital:</span> {countryData.capital?.[0] || "N/A"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Region:</span> {countryData.region || "N/A"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Population:</span> {countryData.population?.toLocaleString() || "N/A"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-bold">Flag:</span>{" "}
                    <img src={countryData.flags?.png} alt="Flag" className="w-16 inline-block" />
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <a
                  href={system.wiki_page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-300 underline text-lg hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Wiki Page
                </a>
                <button
                  onClick={() => onShow(system)}
                  className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition"
                >
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
