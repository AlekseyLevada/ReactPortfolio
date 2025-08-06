import styles from './App.module.scss'
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { Router } from "./utils/router/Router"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <main className={styles.App} id="_customerApp">
      <RouterProvider router={Router} history={BrowserRouter} basename="/ReactPortfolio" />
    </main>
  )
}
