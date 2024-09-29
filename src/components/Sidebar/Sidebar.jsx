import './styles/style.scss'
import {SidebarLogo} from '../SidebarLogo/SidebarLogo'
import {SidebarContacts} from '../SidebarContacts/SidebarContacts'
import { Circles } from "../Circles/Circles"

export const Sidebar = () => {
  return (
    <section className='_customer-sidebar'>
      <SidebarLogo/>
      <Circles/>
      <SidebarContacts/>
    </section>
  )
}