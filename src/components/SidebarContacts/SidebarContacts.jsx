import './styles/style.scss'
import phone_icon from '../../img/phone_icon.png'
import mail_icon from '../../img/mail_icon.png'
import watsapp_icon from '../../img/watsapp_icon.png'
import telegram_icon from '../../img/telegram_icon.png'
import github_icon from '../../img/github_icon.png'

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
          <li>
            <a href="tel:+79851473585" target="_blank" aria-label='Мобильный телефон' title='Мобильный телефон' alt="Мобильный телефон">
              <img src={phone_icon} alt="" loading="lazy" draggable="false" width="24" height="24"/>
            </a>
          </li>
          <li>
            <a href="mailto:aleksey.levada@gmail.com" target="_blank" aria-label='Почта' title='Почта' alt="Почта">
              <img src={mail_icon} alt="" loading="lazy" draggable="false" width="24" height="24"/>
            </a>
          </li>
          <li>
            <a href="//wa.me/+79851473585" target="_blank" aria-label='WatsApp' title='WatsApp' alt="WatsApp">
              <img src={watsapp_icon} alt="" loading="lazy" draggable="false" width="24" height="24"/>
            </a>
          </li>
          <li>
            <a href="//t.me/maybe1988" target="_blank" aria-label='Telegram' title='Telegram' alt="Telegram">
              <img src={telegram_icon} alt="" loading="lazy" draggable="false" width="24" height="24"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/AlekseyLevada" target="_blank" aria-label='Страница Github' title='GitHub' alt="Github">
              <img src={github_icon} alt="" loading="lazy" draggable="false" width="24" height="24"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}