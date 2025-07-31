import styles from './styles/sidebar.module.scss'
import {SidebarLogo} from '../SidebarLogo/SidebarLogo'
import {SidebarContacts} from '../SidebarContacts/SidebarContacts'
import { Circles } from "../Circles/Circles"

export const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <SidebarLogo/>
      <Circles/>
      <SidebarContacts/>
    </section>
  )
}