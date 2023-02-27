import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const About = lazy(() => import("./components/About"));
function AppLayout() {
  const [data, setData] = useState({
    name: "Dummy User",
    email: "dummy@dummy.com",
  });

  return (
    <div className="App">
      <Provider store={store}>
        <UserContext.Provider
          value={{
            data: data,
            setData: setData,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
