import './styles/style.scss'
import { IntroText } from '../IntroText/IntroText'
import { AppBtn } from '../AppBtn/AppBtn'

export const MainContent = () => {
  return (
    <section className='_customer-main-content'>
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="http://localhost:5173/ReactPortfolio/videos/bg_video.mp4" type="video/mp4" />
          <source src="http://localhost:5173/ReactPortfolio/videos/bg_video.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
      <IntroText />
      <AppBtn link="/about" text="Вперед" />
    </section>
  )
}