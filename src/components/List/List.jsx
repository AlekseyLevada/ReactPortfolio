import styles from './styles/list.module.scss'

export const List = ({children}) => {
  return(
    <ul className={styles.list} data-aos="fade-up" data-aos-delay="300">
      {children}
    </ul>
  )
}