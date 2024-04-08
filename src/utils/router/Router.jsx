import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { AboutPage } from "../../pages/About/AboutPage";
import { ContactsPage } from "../../pages/Contacts/ContactsPage";
import { PortfolioPage } from "../../pages/Portfolio/PortfolioPage";
import { ReviewsPage } from "../../pages/Reviews/ReviewsPage";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contacts",
    element: <ContactsPage/>
  },
  {
    path: "/portfolio",
    element: <PortfolioPage/>
  },
  {
    path: "/reviews",
    element: <ReviewsPage/>
  }
])