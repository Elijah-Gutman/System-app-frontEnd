import { useState, useEffect } from "react";

export function SystemsIndex({ systems, onShow }) {
  const [countryData, setCountryData] = useState(null); // State for API data

  async function runFetchKorea(countryName) {
    return await fetch(`https://restcountries.com/v3.1/name/` + countryName)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Rest Countries API Data for Korea:`, data); // Log raw data for testing
        setCountryData(data[0]); // Save the first result from the API
      });
  }

  async function runFetchAny(countryName) {
    return await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Rest Countries API Data for ${countryName}:`, data); // Log raw data for testing
        setCountryData(data[0]); // Save the first result from the API
      })
      .catch((error) => {
        console.error(`Error fetching Rest Countries data for ${countryName}:`, error);
      });
  }

  useEffect(() => {
    if (systems[0]?.countryName === "N.Korea") {
      runFetchKorea("korea");
    } else {
      const countryName = systems[0]?.country_name.toLowerCase();
      runFetchAny(countryName);
    }
  }, [systems]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {systems.map((system, index) => (
        <div
          key={system.id}
          className="w-3/4 max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 transform scale-105"
        >
          {/* Image Section */}
          <div className="w-full">
            <img src={system.image_url} alt={system.country_name} className="w-full h-80 object-cover" />
          </div>

          {/* Information Section */}
          <div className="p-8">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">{system.country_name}</h2>
            <p className="text-gray-600 text-lg mb-4">
              <span className="font-semibold text-gray-800">Economic System:</span> {system.economic_system}
            </p>
            <p className="text-gray-600 text-lg mb-4">
              <span className="font-semibold text-gray-800">Governmental System:</span> {system.governmental_system}
            </p>
            <p className="text-gray-600 text-lg mb-6">
              <span className="font-semibold text-gray-800">Cultural System:</span> {system.cultural_system}
            </p>

            {/* Display API Data Conditionally */}
            {index === 0 && countryData && (
              <div className="bg-blue-100 p-4 rounded-lg mt-4">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Additional Information from API:</h3>
                <p className="text-gray-700">
                  <span className="font-bold">Capital:</span> {countryData.capital?.[0]}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Region:</span> {countryData.region}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Population:</span> {countryData.population.toLocaleString()}
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
  );
}
