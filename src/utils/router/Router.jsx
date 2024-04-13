import { createBrowserRouter, createHashRouter } from "react-router-dom";
import {AboutPage} from '../../pages/About/AboutPage'
import {ReviewsPage} from '../../pages/Reviews/ReviewsPage'
import {PortfolioPage} from '../../pages/Portfolio/PortfolioPage'
import { MainLayout } from "../../pages/MainLayout/MainLayout"
import { ContactsPage } from "../../pages/Contacts/ContactsPage";





export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {
    path: "/about", 
    element: <AboutPage/>
  },
  {
    path: "/reviews", 
    element: <ReviewsPage/>
  },
  {
    path: "/portfolio", 
    element: <PortfolioPage/>
  },
  {
    path: "/contacts", 
    element: <ContactsPage/>
  }
])