import { Navbar } from '../../components/Navbar/Navbar'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu'
import { AppBtn } from '../../components/AppBtn/AppBtn'
import './styles/style.scss'

export const ReviewsPage = () => {
  return (
    <div className='_customer-reviews-page'>
      <div className="_customer-page__container _customer-reviews-page__container">
        <Navbar/>
        <BurgerMenu/>
        <h1 className='_customer-title _customer-reviews-page__title'>
          Отзывы клиентов
        </h1>
        <div className="_customer-btns">
          <AppBtn link="/portfolio" text="Назад" />
          <AppBtn link="/contacts" text="Далее" />
        </div>
      </div>
    </div>
  )
}