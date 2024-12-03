// import require element to create router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import ItemDetails from "./pages/itemDetails";
import ErrorPage from "./pages/ErrorPage";
import { Auth } from "./middlewares/Auth";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  // creating browser router and defining paths and its components as pages.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar isLoggedIn={isLoggedIn} setLogin={setLogin} />,
      // adding error element page
      errorElement: <ErrorPage />,
      // passing children paths and elements
      children: [
        // index is for default path '/' or ''
        {
          index: true,
          element: (
            <Auth>
              <Home />
            </Auth>
          ),
        },
        // defining absolute path
        {
          path: "/about",
          element: (
            <Auth>
              <About />
            </Auth>
          ),
        },
        // defining relative path
        {
          path: "/items",
          children: [
            {
              index: true,
              element: (
                <Auth>
                  <Items />
                </Auth>
              ),
            },
            {
              path: "details/:id",
              element: (
                <Auth>
                  <ItemDetails />
                </Auth>
              ),
            },
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
