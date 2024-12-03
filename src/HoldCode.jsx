// const handleUpdate = (system, params, successCallback) => {
//   console.log("handleUpdate");
//   axios.patch(`/systems/${system.id}.json`, params).then((response) => {
//     setSystems(
//       systems.map((p) => {
//         if (p.id === response.data.id) {
//           return response.data;
//         } else {
//           return p;
//         }
//       })
//     );
//     successCallback();
//     setIsPhotosShowVisible(false);
//   });
// };
