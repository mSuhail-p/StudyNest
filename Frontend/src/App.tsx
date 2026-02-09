import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AreaOfStudy from "./pages/areaOfStudy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/area-of-study",
    element: <AreaOfStudy />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;

