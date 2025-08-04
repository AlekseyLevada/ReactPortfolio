import styles from './styles/list.module.scss'

export const List = ({children}) => {
  return(
    <ul className={styles.list}>
      {children}
    </ul>
  )
}