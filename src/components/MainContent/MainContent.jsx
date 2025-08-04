import styles from './styles/mainContent.module.scss'
import { IntroText } from '../IntroText/IntroText'

export const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.videoBackground}>
        <video
          autoPlay
          loop
          muted
          playsInline
          width="1920"
          height="1437"
          poster="/ReactPortfolio/img/poster_bg.webp"
        >
          <source src="/ReactPortfolio/videos/bg_video.mp4" type="video/mp4" />
          <source src="/ReactPortfolio/videos/bg_video.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <IntroText />
    </section>
  )
}