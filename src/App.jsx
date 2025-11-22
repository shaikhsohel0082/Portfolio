import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Education from "./components/Education/education";
import Project from "./components/Projects/project";
import Skills from "./components/Skills/skills";
import Achievements from "./components/Achievements/achievements";
import Contact from "./components/Contact/contact";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/achievments",
          element: <Achievements />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
