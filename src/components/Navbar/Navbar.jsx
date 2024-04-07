import './styles/style.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='_customer-navbar'>
      <ul>
        <Link to="/">
          <li>
            Главная
          </li>
        </Link>
        <Link to="/about">
          <li>
            О себе
          </li>
        </Link>
        <Link to="/portfolio">
          <li>
            Портфолио
          </li>
        </Link>
        <Link to="/reviews">
          <li>
            Отзывы
          </li>
        </Link>
        <Link to="/contacts">
          <li>
            Контакты
          </li>
        </Link>
        <Link>
          <li>
            Скачать CV
          </li>
        </Link>
      </ul>
    </div>
  )
}