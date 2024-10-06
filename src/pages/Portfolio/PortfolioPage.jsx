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
        <div className="_customer-info _customer-portfolio-page__info">
          <p>
            В&nbsp;данном разделе представлена лишь небольшая часть моих работ.
          </p>
          <p>
            Для&nbsp;более детального ознакомления с&nbsp;остальными работами свяжитесь со&nbsp;мной любым удобным и&nbsp;доступным для&nbsp;Вас способом.
          </p>
          <p>
            Для&nbsp;связи со&nbsp;мной все&nbsp;мои контактные данные есть в&nbsp;разделе c контактами.
          </p>
        </div>
        <PortfolioWorks />
        <div className="_customer-btns">
          <AppBtn link="/about" text="Назад" />
          <AppBtn link="/reviews" text="Далее" />
        </div>
      </main>
    </section>
  )
}