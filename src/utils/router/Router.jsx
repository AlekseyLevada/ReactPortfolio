import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { AboutPage } from "../../pages/About/AboutPage";
import { ContactsPage } from "../../pages/Contacts/ContactsPage";

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
  }
])