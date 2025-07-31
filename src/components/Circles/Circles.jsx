import styles from './styles/circles.module.scss'
import mainPhoto from '/img/int_img.webp'

export const Circles = () => {
  return (
    <div className={styles.circles}>
      <img src={mainPhoto} alt="Main Logo" loading="lazy" draggable="false" width="520" height="520" />
    </div>
  )
}

