import './styles/style.scss'
import phone_icon from '../../img/phone_icon.png'
import mail_icon from '../../img/mail_icon.png'
import watsapp_icon from '../../img/watsapp_icon.png'
import telegram_icon from '../../img/telegram_icon.png'

export const SidebarContacts = () => {
  return (
    <div className='_customer-sidebar__contacts'>
      <div>
        <p>
          contact me:
        </p>
      </div>
      <div>
        <ul>
          <a href="tel:+79851473585" target="_blank">
            <img src={phone_icon} alt="" loading="lazy" />
          </a>
          <a href="mailto:aleksey.levada@gmail.com" target="_blank">
            <img src={mail_icon} alt="" loading="lazy" />
          </a>
          <a href="//wa.me/+79851473585" target="_blank">
            <img src={watsapp_icon} alt="" loading="lazy" />
          </a>
          <a href="//t.me/maybe1988" target="_blank">
            <img src={telegram_icon} alt="" loading="lazy" />
          </a>
        </ul>
    </div>
    </div>
  )
}