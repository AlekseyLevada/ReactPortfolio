import { BrowserRouter, RouterProvider } from "react-router-dom"
import { Router } from "./utils/router/Router"


export const App = () => {

  return (
    <div className="_customer-app">
    <RouterProvider router={Router} history={BrowserRouter} basename="/ReactPortfolio"/>
    </div>
  )
}
