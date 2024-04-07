// import { StyledContactsPage } from "./styles/StyledContactsPage";
import { Link } from "react-router-dom";

export const ContactsPage = () => {
  return (
    <div className="_customer-contacts">
      <h1>
        contacts
      </h1>
      <Link to="/">
      <button>
        на главную
      </button>
      </Link>
    </div>
  )
}