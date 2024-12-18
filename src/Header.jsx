import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <header className="absolute top-4 left-4">
      <button
        onClick={handleNavigation}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded shadow transition-all"
      >
        Home
      </button>
    </header>
  );
}

// UNSTYLED HEADER COMPONENT FOR REFERENCE ONLY
// UNSTYLED HEADER COMPONENT FOR REFERENCE ONLY
// UNSTYLED HEADER COMPONENT FOR REFERENCE ONLY
// import "./index.css";
// import { useNavigate } from "react-router-dom";

// export function Header() {
//   const navigate = useNavigate();
//   const handleNavigation = () => {
//     navigate("/");
//   };
//   return (
//     <header>
//       <nav>
//         <button onClick={handleNavigation}>Home</button>
//       </nav>
//     </header>
//   );
// }
