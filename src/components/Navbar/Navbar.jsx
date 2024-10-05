import './styles/style.scss'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../../lib/menuItems'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../utils/store/slices/burgerSlice'

export const Navbar = () => {

  const dispatch = useDispatch()

  const burgerState =  useSelector(state => state.burgerReducer.value)

  return (
    <div className={burgerState? "_customer-navbar is-active" : "_customer-navbar"}>
      <nav>
        {
          menuItems.map((item, index) => {
            return (
              <NavLink key = {index.toString()} to={item.link} onClick={() => dispatch(toggle())}>
                {item.name}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}