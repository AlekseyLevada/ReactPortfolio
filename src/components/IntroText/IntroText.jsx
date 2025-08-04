import styles from './styles/introText.module.scss'
import { AppBtn } from '../AppBtn/AppBtn'

export const IntroText = () => {
  return (
    <div className={styles.introText}>
      <h1>MY</h1>
      <h1>PORTFOLIO</h1>
      <p>Frontend & Web developer</p>
      <AppBtn className={styles.appBtn} link="/about" text="Вперед" />
    </div>
  )
}