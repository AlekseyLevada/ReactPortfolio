import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.jsx'
import { PortfolioWorks } from '../../components/PortfolioWorks/PortfolioWorks.jsx'
import './styles/style.scss'

export const PortfolioPage = () => {
  return (
    <section className="_customer-portfolio-page">
      <main className="_customer-page__container _customer-portfolio-page__container">
        <Navbar />
        <BurgerMenu />
        <h1 className='_customer-title _customer-portfolio-page__title'>
          Мои работы
        </h1>
        <PortfolioWorks/>
        <div className="_customer-btns">
          <AppBtn link="/about" text="Назад" />
          <AppBtn link="/reviews" text="Далее" />
        </div>
      </main>
    </section>
  )
}