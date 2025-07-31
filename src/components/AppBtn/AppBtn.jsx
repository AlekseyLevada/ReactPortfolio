import styles from './styles/appBtn.module.scss'
import { Link } from 'react-router-dom'

export const AppBtn = ({ link = "/", text = "Кнопка", className }) => {
  return (
    <>
      <Link className={`${styles.appBtn} ${className}`} to={link}>{text}</Link>
    </>
  )
}