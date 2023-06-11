import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Root from "./pages/Root";
import Library from "./pages/library/Library";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/library", element: <Library /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
