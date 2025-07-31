import styles from './styles/title.module.scss'

export const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <h1>
        {title}
      </h1>
    </div>
  )
}