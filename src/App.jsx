import { BrowserRouter, RouterProvider } from "react-router-dom"
import { Router } from "./utils/router/Router"
import ParticlesComponent from "./components/Particles/Particles"

export const App = () => {
  return (
    <main className="_customer-app" id="_customerApp">
      <ParticlesComponent id="particles"/>
    <RouterProvider router={Router} history={BrowserRouter} basename="/ReactPortfolio"/>
    </main>
  )
}
