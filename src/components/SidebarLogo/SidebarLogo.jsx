import './styles/style.css'
import { Link } from 'react-router-dom'

export const SidebarLogo = () => {
  return (
    <div className='_customer-sidebar__logo'>
      <Link to="/">
        <h1>
          Portfolio
        </h1>
      </Link>
    </div>
  )
}