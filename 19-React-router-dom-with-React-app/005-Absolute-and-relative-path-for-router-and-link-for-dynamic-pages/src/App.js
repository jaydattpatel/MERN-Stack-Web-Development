// import require element to create router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ItemDetails from "./pages/itemDetails";

function App() {
  // creating browser router and defining paths and its components as pages.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      // passing children paths and elements
      children: [
        // index is for default path '/' or ''
        { index: true, element: <Home /> },
        // defining absolute path
        { path: "/about", element: <About /> },
        // defining relative path
        {
          path: "/items",
          children: [
            { index: true, element: <Items /> },
            { path: "details", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {/* providing router to render element */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
