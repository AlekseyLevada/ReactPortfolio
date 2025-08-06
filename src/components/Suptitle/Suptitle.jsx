import styles from './style/suptitle.module.scss'

export const Suptitle = ({ children }) => {
  return (
    <div className={styles.suptitle} data-aos="fade-up" data-aos-delay="300">
      <h3>
        {children}
      </h3>
    </div>
  )
}