import { Navbar } from '../../components/Navbar/Navbar'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu'
import { AppBtn } from '../../components/AppBtn/AppBtn'
import './styles/style.scss'

export const ContactsPage = () => {
  return (
    <div className='_customer-contacts-page'>
      <div className="_customer-page__container _customer-contacts-page__container">
        <Navbar/>
        <BurgerMenu/>
        <h1 className='_customer-title _customer-contacts-page__title'>
          Контакты
        </h1>
        <div className="_customer-btns">
          <AppBtn link="/reviews" text="Назад" />
        </div>
      </div>
    </div>
  )
}