import styles from './styles/title.module.scss'

export const Title = ({ children}) => {
  return (
    <div className={styles.title} data-aos="fade-up" data-aos-delay="100">
      <h1>
        {children}
      </h1>
    </div>
  )
}