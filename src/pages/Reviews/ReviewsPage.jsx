import { Navbar } from '../../components/Navbar/Navbar'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu'
import './styles/style.scss'

export const ReviewsPage = () => {
  return (
    <div className='_customer-reviews-page'>
      <div className="_customer-reviews-page__container">
        <Navbar/>
        <BurgerMenu/>
        <h1>
          Отзывы клиентов
        </h1>
      </div>
    </div>
  )
}