import './styles/style.css'
import { Link } from 'react-router-dom'

const cvUrl = "/my_cv.pdf"

const downloadFile = (url) => {
  const fileName = url.split("/").pop()
  const aTag = document.createElement("a")
  aTag.href = url
  aTag.setAttribute("download", fileName)
  document.body.appendChild(aTag)
  aTag.click()
  aTag.remove()
}

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
        <Link onClick={() => { downloadFile(cvUrl) }}>
          <li>
            Скачать CV
          </li>
        </Link>
      </ul>
    </div>
  )
}