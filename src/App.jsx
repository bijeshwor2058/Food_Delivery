import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home/Home";
import Reviews from "./Component/Reviews/Reviews";
import Cart from "./Component/Cart/Cart";
import Login from "./Component/Login/Login";
import Signup from "./Component/SignUp/SignUp";
import store from "./store/store";
import { Provider } from "react-redux";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/reviews",
          element: <Reviews />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};
export default App;
