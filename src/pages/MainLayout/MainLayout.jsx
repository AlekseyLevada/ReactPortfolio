import './styles/style.css'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MainContent } from '../../components/MainContent/MainContent'

export const MainLayout = () => {
  return (
    <div className="_customer-main-layout">
      <Sidebar/>
      <MainContent/>
    </div>
  )
}