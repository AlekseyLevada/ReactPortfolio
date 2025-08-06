import styles from './styles/minortitle.module.scss'

export const Minortitle = ({ children }) => {
  return (
    <div className={styles.minortitle} data-aos="fade-up" data-aos-delay="400">
      <h4>
        {children}
      </h4>
    </div>
  )
}