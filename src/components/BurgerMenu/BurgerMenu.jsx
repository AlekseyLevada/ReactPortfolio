import './styles/style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../utils/store/slices/burgerSlice'


export const BurgerMenu = () => {

  const dispatch = useDispatch()
  useSelector((state) => state.burgerReducer.toggle)


  return (
    <div className='_customer-burger-menu' onClick={() => dispatch(toggle())}>
      
    </div>
  )
}