import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
const About = lazy(() => import("./components/About")); //This is a promise.
function AppLayout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          //nested routing
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
