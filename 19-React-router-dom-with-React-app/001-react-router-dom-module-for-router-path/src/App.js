// import require element to create router
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

function App() {
  //Method-1
  // creating browser router and defining paths and its components as pages.
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/items", element: <Items /> },
  ]);

  //Method-2
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  return (
    <>
      <Navbar />
      {/* providing router to render element */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
