import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.jsx'
import { PortfolioWorks } from '../../components/PortfolioWorks/PortfolioWorks.jsx'
import { Page } from '../../components/Page/Page.jsx'
import { Title } from '../../components/Title/Title.jsx'
import { InfoText } from '../../components/InfoText/InfoText.jsx'
import styles from './styles/portfolio-page.module.scss'

export const PortfolioPage = () => {
  return (
    <Page>
      <Navbar />
      <BurgerMenu />
      <Title>Мои работы</Title>
      <InfoText>
        <p>В этом разделе вы найдёте лишь несколько примеров из моего портфолио.</p>
        <p>Если вас заинтересовали мои работы и вы хотели бы увидеть больше — буду рад поделиться полной коллекцией. Связаться со мной можно любым удобным способом. Все контакты указаны на главной странице.</p>
        <p>Жду вашего звонка или сообщения!</p>
      </InfoText>
      <PortfolioWorks />
      <nav className={styles.appBtns}>
        <AppBtn className={styles.appBtn} link="/about" text="Назад" />
      </nav>
    </Page>
  )
}