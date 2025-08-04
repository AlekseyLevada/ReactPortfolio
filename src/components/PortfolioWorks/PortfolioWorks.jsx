import styles from './styles/portfolio-works.module.scss'
import { PortfolioWorkCard } from '../PortfolioWorkCard/PortfolioWorkCard'
import { portfolioWorks } from '../../lib/portfolioWorks'

export const PortfolioWorks = () => {

  return (
    <ul className={styles.portfolioWorks}>
      {
        portfolioWorks.map(work => {
          return (
            <PortfolioWorkCard 
            key={work.id}
            link={work.workLink}
            title={work.workTitle}
            skills={work.workSkills}
            preview={work.workPreview}
            description={work.workDescription}/>
          )
        })
      }
    </ul>
  )
}