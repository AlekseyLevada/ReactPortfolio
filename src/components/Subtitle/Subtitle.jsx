import styles from './styles/subtitle.module.scss'

export const Subtitle = ({ children}) => {
  return (
    <div className={styles.subtitle}>
      <h2>
        {children}
      </h2>
    </div>
  )
}