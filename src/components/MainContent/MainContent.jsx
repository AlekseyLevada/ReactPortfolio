import './styles/style.scss'
import { IntroText } from '../IntroText/IntroText'
import { AppBtn } from '../AppBtn/AppBtn'

export const MainContent = () => {
  return (
    <div className='_customer-main-content'>
      <IntroText />
      <AppBtn link="/about" text="Вперед"></AppBtn>
    </div>
  )
}