import styles from './styles/sidebarLogo.module.scss'
import { Link } from 'react-router-dom'

export const SidebarLogo = () => {
  return (
    <div className={styles.sidebarLogo}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
    </div>
  )
}