import styles from './styles/title.module.scss'

export const Title = ({ children}) => {
  return (
    <div className={styles.title}>
      <h1>
        {children}
      </h1>
    </div>
  )
}