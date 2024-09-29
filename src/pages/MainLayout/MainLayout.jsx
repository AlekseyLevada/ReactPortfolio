import './styles/style.scss'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MainContent } from '../../components/MainContent/MainContent'

export const MainLayout = () => {
  return (
    <section className="_customer-main-layout">
      <Sidebar/>
      <MainContent/>
    </section>
  )
}