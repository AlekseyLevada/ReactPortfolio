import styles from './style/suptitle.module.scss'

export const Suptitle = ({ children }) => {
  return (
    <div className={styles.suptitle}>
      <h3>
        {children}
      </h3>
    </div>
  )
}