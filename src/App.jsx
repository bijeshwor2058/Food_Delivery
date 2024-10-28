import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Reviews from "./Component/Reviews/Reviews"
import Home from "./Component/Home/Home"
import Cart from "./Component/Cart/Cart"


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element: <Home/>
      },
      {
        path:'/reviews',
        element: <Reviews/>
      },
      {
        path:'/cart',
        element: <Cart/>
      }
    ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App