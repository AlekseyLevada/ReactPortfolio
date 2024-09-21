import { Navbar } from '../../components/Navbar/Navbar'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu'
import './styles/style.scss'

export const ContactsPage = () => {
  return (
    <div className='_customer-contacts-page'>
      <div className="_customer-contacts-page__container">
        <Navbar/>
        <BurgerMenu/>
        <h1>
          Контакты
        </h1>
      </div>
    </div>
  )
}