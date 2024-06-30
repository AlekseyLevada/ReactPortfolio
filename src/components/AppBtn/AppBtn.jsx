import './styles/style.css'
import { Link } from 'react-router-dom'

export const AppBtn = (props) => {
  return(
    <>
    <Link className='_customer-btn' to={props.link}>{props.text}</Link>
    </>
  )
}