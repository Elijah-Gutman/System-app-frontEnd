import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { SystemsPage } from "./SystemsPage";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { SystemsNew } from "./SystemsNew";

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
        path: "/systems/second", //this is the second system
        element: <SystemsPage isSecondSystem={true} />,
      },
      {
        path: "/systems/third", //this is the third system
        element: <SystemsPage isThirdSystem={true} />,
      },
      {
        path: "/systems/fourth", //this is the fourth system
        element: <SystemsPage isFourthSystem={true} />,
      },
      {
        path: "/systems/fifth", //this is the fifth system
        element: <SystemsPage isFifthSystem={true} />,
      },
      {
        path: "/systems/sixth", //this is the sixth system
        element: <SystemsPage isSixthSystem={true} />,
      },
      {
        path: "/systems/seventh", //this is the seventh system
        element: <SystemsPage isSeventhSystem={true} />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/systemsnew",
        element: <SystemsNew />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
