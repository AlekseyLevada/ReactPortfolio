import './styles/style.css'
import {SidebarLogo} from '../SidebarLogo/SidebarLogo'
import { Circles } from "../Circles/Circles"
import {SidebarContacts} from '../SidebarContacts/SidebarContacts'

export const Sidebar = () => {
  return (
    <div className='_customer-sidebar'>
      <SidebarLogo/>
      <Circles/>
      <SidebarContacts/>
    </div>
  )
}