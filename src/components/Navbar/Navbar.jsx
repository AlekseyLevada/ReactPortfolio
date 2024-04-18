import './styles/style.css'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../../lib/menuItems'

export const Navbar = () => {
  return (
    <div className='_customer-navbar'>
      <nav>
        {
          menuItems.map((item, index) => {
            return (
              <NavLink key = {index.toString()} to={item.link} /*onClick={() => {downloadFile(cvPdfUrl)}}*/>
                {item.name}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}