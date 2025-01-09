import { useState, useEffect } from "react";
import { Clock } from "./Clock"; // Adjust the path based on your folder structure

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative">
      <div className="flex flex-col items-center">
        {systems.map((system) => (
          <div
            key={system.id}
            className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-300 my-8"
          >
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
              <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
                {system.country_name || "Unknown Country"}
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                <span className="font-semibold text-gray-800">Economic System:</span> {system.economic_system || "N/A"}
              </p>
              <p className="text-gray-600 text-lg mb-4">
                <span className="font-semibold text-gray-800">Governmental System:</span>{" "}
                {system.governmental_system || "N/A"}
              </p>
              <p className="text-gray-600 text-lg mb-6">
                <span className="font-semibold text-gray-800">Cultural System:</span> {system.cultural_system || "N/A"}
              </p>

              {/* Display API Data Conditionally */}
              {systems[0]?.id === system.id && countryData && (
                <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Rest Countries API Integrated Information:
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-bold">Capital:</span> {countryData.capital?.[0] || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Region:</span> {countryData.region || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Population:</span> {countryData.population?.toLocaleString() || "N/A"}
                  </p>
                  <p className="text-gray-700">
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
                  className="text-blue-500 underline text-lg hover:text-blue-600"
                >
                  Wiki Page
                </a>
                <button
                  onClick={() => onShow(system)}
                  className="px-6 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition"
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
