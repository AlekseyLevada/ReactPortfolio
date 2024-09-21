import './styles/style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../utils/store/slices/burgerSlice'


export const BurgerMenu = () => {

  const dispatch = useDispatch()
  const burgerState = useSelector((state) => state.burgerReducer.value)

  return (
    <div className={burgerState? "_customer-burger-menu is-active": "_customer-burger-menu"} onClick={() => dispatch(toggle())}>
      
    </div>
  )
}