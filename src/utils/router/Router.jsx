import { createHashRouter } from "react-router-dom";
import {AboutPage} from '../../pages/About/AboutPage'
// import {PortfolioPage} from '../../pages/Portfolio/PortfolioPage'
import { MainLayout } from "../../pages/MainLayout/MainLayout"





export const Router = createHashRouter ([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {
    path: "/about", 
    element: <AboutPage/>
  },
  // {
  //   path: "/portfolio", 
  //   element: <PortfolioPage/>
  // }
])