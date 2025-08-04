import styles from './styles/minortitle.module.scss'

export const Minortitle = ({ children }) => {
  return (
    <div className={styles.minortitle}>
      <h4>
        {children}
      </h4>
    </div>
  )
}