import styles from './styles/page.module.scss'

export const Page = ({ children }) => {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        {children}
      </section>
    </main>
  )
}