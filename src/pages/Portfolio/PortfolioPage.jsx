import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import './styles/style.scss'

export const PortfolioPage = () => {
  return (
    <div className="_customer-portfolio-page">
      <div className="_customer-portfolio-page__container">
        <Navbar />
        <p>Страница на оформлении</p>
        <div className="_customer-btns">
          <AppBtn link="/about" text="Назад"/>
          <AppBtn link="/reviews" text="Далее"/>
        </div>
      </div>
    </div>
  )
}