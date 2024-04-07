import { RouterProvider } from "react-router-dom"
import { Router } from "./utils/router/Router.jsx"

export const App = () => {

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}
