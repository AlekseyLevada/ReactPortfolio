import styles from './styles/portfolio-work-card.module.scss'
import { Link } from 'react-router-dom'

export const PortfolioWorkCard = (props) => {
  return (
    <li className={styles.portfolioWorkCard} title={props.title}>
      <Link className={styles.portfolioWorkCardLink} to={props.link} target='_blank'>
        <div className={styles.portfolioWorkCardTitle}>
          {props.title}
        </div>
        <div className={styles.portfolioWorkCardPreview}>
          <img src={props.preview} alt={`Preview of ${props.title}`} draggable="false" loading='lazy' width="385" height="232" />
        </div>
        <div className={styles.portfolioWorkCardSkills}>
          {props.skills}
        </div>
      </Link>
    </li>
  )
}