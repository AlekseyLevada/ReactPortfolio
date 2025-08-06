import styles from './styles/subtitle.module.scss'

export const Subtitle = ({ children}) => {
  return (
    <div className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
      <h2>
        {children}
      </h2>
    </div>
  )
}