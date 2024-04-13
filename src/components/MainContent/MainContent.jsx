import './styles/style.css'
import { IntroText } from '../IntroText/IntroText'
import { NavLink } from 'react-router-dom'

export const MainContent = () => {
  return (
    <div className='_customer-main-content'>
      <IntroText />
      <NavLink className="_customer-btn" to="/about" >
        Вперед
      </NavLink>
    </div>
  )
}