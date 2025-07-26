import './styles/style.scss'
import mainPhoto from '/img/int_img.webp'

export const Circles = () => {
  return (
    <div className="_customer-circles">
      <img src={mainPhoto} alt="Main Logo" loading="lazy" draggable="false" width="520" height="520" />
    </div>
  )
}

