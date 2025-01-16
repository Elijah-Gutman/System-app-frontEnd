import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { SystemsPage } from "./SystemsPage";
import { Footer } from "./Footer";
import { LandingPage } from "./LandingPage";
import { SystemsNew } from "./SystemsNew";
import { Quizzes } from "./Quizzes"; // Import the Quizzes component

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/", // Landing page route
        element: <LandingPage />,
      },
      {
        path: "/quizzes", // New route for testing the Quizzes component
        element: <Quizzes />,
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
        path: "/systems/first",
        element: <SystemsPage isFirstSystem={true} />,
      },
      {
        path: "/systems/second",
        element: <SystemsPage isSecondSystem={true} />,
      },
      {
        path: "/systems/third",
        element: <SystemsPage isThirdSystem={true} />,
      },
      {
        path: "/systems/fourth",
        element: <SystemsPage isFourthSystem={true} />,
      },
      {
        path: "/systems/fifth",
        element: <SystemsPage isFifthSystem={true} />,
      },
      {
        path: "/systems/sixth",
        element: <SystemsPage isSixthSystem={true} />,
      },
      {
        path: "/systems/seventh",
        element: <SystemsPage isSeventhSystem={true} />,
      },
      {
        path: "/systems/eighth",
        element: <SystemsPage isEighthSystem={true} />,
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
