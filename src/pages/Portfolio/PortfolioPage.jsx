import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.jsx'
import './styles/style.scss'

export const PortfolioPage = () => {
  return (
    <div className="_customer-portfolio-page">
      <div className="_customer-portfolio-page__container">
        <Navbar />
        <BurgerMenu />
        <h1>
          Мои работы
        </h1>
        <div className="_customer-btns">
          <AppBtn link="/about" text="Назад" />
          <AppBtn link="/reviews" text="Далее" />
        </div>
      </div>
    </div>
  )
}