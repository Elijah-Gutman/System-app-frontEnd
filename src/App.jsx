import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { SystemsPage } from "./SystemsPage";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { SystemsIndex } from "./SystemsIndex";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/", //nothing infront of the forward slash = index url
        element: <LandingPage />,
      },
      {
        path: "/systems",
        element: <SystemsPage />,
      },
      {
        path: "/systems/:id",
        element: <SystemsPage />,
      },
      {
        path: "/systems/first", //this is the first system
        element: <SystemsPage isFirstSystem={true} />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
