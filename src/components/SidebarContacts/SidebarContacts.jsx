import './styles/style.scss'

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
            <a href="tel:+79851473585" target="_blank" aria-label='Мобильный телефон' title='Мобильный телефон' alt="Мобильный телефон" data-link="phone"></a>
          </li>
          <li>
            <a href="mailto:aleksey.levada@gmail.com" target="_blank" aria-label='Почта' title='Почта' alt="Почта" data-link="mail"></a>
          </li>
          <li>
            <a href="//wa.me/+79851473585" target="_blank" aria-label='WatsApp' title='WatsApp' alt="WatsApp" data-link="watsapp"></a>
          </li>
          <li>
            <a href="//t.me/maybe1988" target="_blank" aria-label='Telegram' title='Telegram' alt="Telegram" data-link="telegram"></a>
          </li>
          <li>
            <a href="https://github.com/AlekseyLevada" target="_blank" aria-label='Страница Github' title='GitHub' alt="Github" data-link="github"></a>
          </li>
        </ul>
      </div>
    </div>
  )
}