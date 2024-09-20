import './styles/style.scss'
import {menuItems} from '../../lib/menuItems'

export const BurgerMenu = () => {
  return(
    <div className='_customer-burger-menu'>
      <nav className='_customer-burger-menu__nav'>
        {
          menuItems.map((item, index) => {
            return (
              <NavLink key = {index.toString()} to={item.link}>
                {item.name}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}