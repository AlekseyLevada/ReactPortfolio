import './styles/style.scss'
import { Link } from 'react-router-dom'

export const PortfolioWorkCard = (props) => {
  return (
    <li className="_customer-portfolio-work-card">
      <Link className='_customer-portfolio-work-card-link' to={props.link} target='_blank'>
        <div className="_customer-portfolio-work-card-title">
          {props.title}
        </div>
        <div className="_customer-portfolio-work-card-preview">
          <img src={props.preview} alt="" draggable="false"loading='lazy'/>
        </div>
        <div className="_customer-portfolio-work-card-skills">
          {props.skills}
        </div>
      </Link>
    </li>
  )
}