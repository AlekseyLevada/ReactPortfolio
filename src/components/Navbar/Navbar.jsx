import './styles/style.css'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../../lib/menuItems'

const cvUrl = "/my_cv.pdf"

const downloadFile = (url) => {
  const fileName = url.split("/cv").pop()
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
      <nav>
        {
          menuItems.map((item, index) => {
            return (
              <NavLink key = {index.toString()} to={item.link} /*onClick={() => {downloadFile(cvUrl)}}*/>
                {item.name}
              </NavLink>
            )
          })
        }
      </nav>
    </div>
  )
}