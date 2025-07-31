import styles from './styles/mainLayout.module.scss'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MainContent } from '../../components/MainContent/MainContent'

export const MainLayout = () => {
  return (
    <section className={styles.mainLayout}>
      <Sidebar/>
      <MainContent/>
    </section>
  )
}