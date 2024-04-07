import './styles/style.css'
import {Navbar} from '../Navbar/Navbar'
import { IntroText } from "../IntroText/IntroText";

export const MainContent = () => {
  return (
    <div className='_customer-main-content'>
      <Navbar/>
      <IntroText/>
    </div>
  )
}