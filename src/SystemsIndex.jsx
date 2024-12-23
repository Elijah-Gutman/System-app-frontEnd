export function SystemsIndex({ systems, onShow }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {systems.map((system) => (
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
            <div className="flex justify-between items-center">
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

// STYLED V1!
// STYLED V1
// STYLED v1
// export function SystemsIndex({ systems, onShow }) {
//   return (
//     <div
//       className="flex justify-center items-center h-screen bg-fixed bg-cover"
//       style={{
//         backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/08/20/03/parthenon-1245713_1280.jpg')`, // Replace with your preferred Greco-Roman background image
//       }}
//     >
//       {systems.map((system) => (
//         <div
//           key={system.id}
//           className="max-w-4xl bg-white bg-opacity-90 shadow-md rounded-lg overflow-hidden border border-gray-300 backdrop-blur-sm"
//         >
//           {/* Image Section */}
//           <div className="w-full h-2/3">
//             <img src={system.image_url} alt={system.country_name} className="w-full h-full object-cover" />
//           </div>

//           {/* Information Section */}
//           <div className="p-6 bg-gray-800 bg-opacity-80 text-white">
//             <h2 className="text-3xl font-bold text-gray-100 mb-4">{system.country_name}</h2>
//             <p className="text-gray-200 text-sm mb-2">
//               <span className="font-semibold text-gray-100">Economic System:</span> {system.economic_system}
//             </p>
//             <p className="text-gray-200 text-sm mb-2">
//               <span className="font-semibold text-gray-100">Governmental System:</span> {system.governmental_system}
//             </p>
//             <p className="text-gray-200 text-sm mb-4">
//               <span className="font-semibold text-gray-100">Cultural System:</span> {system.cultural_system}
//             </p>
//             <div className="flex justify-between items-center">
//               <a
//                 href={system.wiki_page}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-300 underline text-sm hover:text-blue-400"
//               >
//                 Wiki Page
//               </a>
//               <button
//                 onClick={() => onShow(system)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//               >
//                 More info
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

//UNSTYLED COD BELOW FOR REFERANCE ONLY
//UNSTYLED COD BELOW FOR REFERANCE ONLY
//UNSTYLED COD BELOW FOR REFERANCE ONLY
// export function SystemsIndex({ systems, onShow }) {
//   return (
//     <div>
//       <h1>A place based on your values ({systems.length} total)</h1>
//       {systems.map((system) => (
//         <div key={system.id}>
//           <h2>{system.country_name}</h2>
//           <p>Economic System: {system.economic_system}</p>
//           <p>Governmental System: {system.governmental_system}</p>
//           <p>Cultural System: {system.cultural_system}</p>
//           <img src={system.image_url} alt="" />
//           <a href={system.wiki_page}>Wiki Page</a>
//           <button onClick={() => onShow(system)}>More info</button>
//         </div>
//       ))}
//     </div>
//   );
// }
