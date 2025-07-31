import styles from './App.module.scss'
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { Router } from "./utils/router/Router"

export const App = () => {
  return (
    <main className={styles.App} id="_customerApp">
    <RouterProvider router={Router} history={BrowserRouter} basename="/ReactPortfolio"/>
    </main>
  )
}
