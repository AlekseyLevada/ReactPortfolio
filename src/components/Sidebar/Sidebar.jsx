import './styles/style.scss'
import {SidebarLogo} from '../SidebarLogo/SidebarLogo'
import {SidebarContacts} from '../SidebarContacts/SidebarContacts'
import { Circles } from "../Circles/Circles"

export const Sidebar = () => {
  return (
    <div className='_customer-sidebar'>
      <SidebarLogo/>
      <Circles/>
      <SidebarContacts/>
    </div>
  )
}