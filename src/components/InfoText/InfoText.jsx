import styles from './styles/info-text.module.scss'

export const InfoText = ({children}) => {
  return (
    <div className={styles.infoText}>
      {children}
    </div>
  )
}