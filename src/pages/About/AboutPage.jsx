import './styles/style.scss'
import { skills_list } from '../../lib/skills.js'
import { soft_skills } from '../../lib/soft-skills.js'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.jsx'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import myCvImg from '../../img/pdf.png'

const cvUrl = "my_cv.pdf"

const downloadFile = (url) => {
  const fileName = url.split("my_cv").pop()
  const aTag = document.createElement("a")
  aTag.href = url
  aTag.setAttribute("download", "Aleksey_Levada_CV")
  document.body.appendChild(aTag)
  aTag.click()
  aTag.remove()
}

export const AboutPage = () => {

  return (
    <section className='_customer-about-page'>
      <main className='_customer-page__container _customer-about-page__container'>
        <Navbar />
        <BurgerMenu />
        <h1 className='_customer-title _customer-about-page__title'>
          Привет, давай&nbsp;знакомиться!
        </h1>

        <div className="_customer-info _customer-about-page__info">
          <h2 className='_customer-subtitle _customer-about-page__subtitle'>
            Левада Алексей
          </h2>
          <div className="_customer-list _customer-about-page__list">
            <ul>
              <li>Frontend-разработчик, Москва, 35 лет</li>
              <li>2014 год. - первый "Hello World"</li>
              <li>С 2015 года погружен в веб-разработку. Обожаю Frontend за мгновенную визуальную отдачу — когда код превращается в живой интерфейс</li>
            </ul>
          </div>
          <h2 className='_customer-subtitle _customer-about-page__subtitle'>
            Мой путь:
          </h2>
          <div className="_customer-list _customer-about-page__list">
            <ul>
              <li>Начал с HTML/CSS, нарезал десятки макетов</li>
              <li>Перешел к JavaScript, учился на реальных проектах и через <a href="https://learn.javascript.ru/" target="_blank">Learn&nbsp;JavaScript</a></li>
              <li>Углубил знания в <a href="https://inordic.ru/" target='_blank'>"NORDIC IT SCHOOL"</a>, где довел навыки до production-уровня</li>
              <li>Первый коммерческий опыт получил в командах с сильными наставниками</li>
            </ul>
          </div>
          <h2 className='_customer-subtitle _customer-about-page__subtitle'>
            Почему стоит связаться?
          </h2>
          <div className="_customer-list _customer-about-page__list">
            <ul>
              <li>Люблю сложные задачи, где нужно копать в документацию и экспериментировать. Готов обсуждать как пет-проекты, так и серьезные продукты</li>
              <li><i>P.S. Мой код — не просто функционал, это UX-история, которую почувствует пользователь.</i></li>
            </ul>
          </div>
        </div>
        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Хард скилы
        </h2>
        <div className="_customer-skils__grid">
          {
            skills_list.map(skill => {
              return (
                <div className="_customer-skill__grid-item" key={skill.id}>
                  <Link to={skill.link}>
                    <p>
                      {skill.name}
                    </p>
                    <img src={skill.img} alt="" loading='lazy' draggable="false" width="100" height="100" />
                  </Link>
                </div>
              )
            })
          }
        </div>

        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Софт скилы
        </h2>
        <div className="_customer-list _customer-about-page__list">
          <ul>
            {
              soft_skills.map((skill, index) => {
                return (
                  <li key={index}>{skill}</li>
                )
              })
            }
          </ul>
        </div>
        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Опыт работы
        </h2>
        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          ОАО "Силур" | Август 2008 — Май 2022 (13 лет 10 мес.)
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Начальник производственного участка
        </h4>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Управление командой, контроль качества и безопасности
            </li>
            <li>
              Оптимизация процессов, выполнение плановых показателей
            </li>
            <li>
              Повышение до зам. начальника цеха
            </li>
          </ul>
        </div>
        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          Веб-студия CodeIT | Сентябрь 2016 — Июнь 2018 (1 год 10 мес.)
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Frontend-разработчик (Junior) / Верстальщик
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Основные задачи:
        </h4>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Верстка Pixel Perfect (Figma/Photoshop)
            </li>
            <li>
              Адаптация под мобильные устройства
            </li>
            <li>
              Интеграция с CMS и фреймворками
            </li>
            <li>
              Оптимизация скорости загрузки (улучшение на 25%)
            </li>
          </ul>
        </div>

        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          Пульс Цен | Март 2021 — н.в. (4+ года)
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Frontend-разработчик (Middle)
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Стек: React/Vue, TypeScript, Redux/Zustand, Node.js, Nest.js, БЭМ, SCSS модули
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Ключевые навыки:
        </h4>
        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Разработка SPA, адаптивных и отзывчивых интерфейсов
            </li>
            <li>
              Оптимизация производительности (lazy loading, code splitting)
            </li>
            <li>
              Миграция с JS на TypeScript (снижение ошибок на 35%)
            </li>
            <li>
              Настройка CI/CD (GitHub Actions/GitLab CI)
            </li>
            <li>
              Работа с API, базами данных, код-ревью
            </li>
          </ul>
        </div>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Достижения:
        </h4>
        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Улучшил загрузку приложения на 30%
            </li>
            <li>
              Автоматизировал процессы деплоя
            </li>
            <li>
              Участие в улучшении кодовой базы и внедрении лучших практик
            </li>
          </ul>
        </div>
        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Резюме
        </h2>
        <div className="_customer-resume__file">
          <Link onClick={() => { downloadFile(cvUrl) }} Link><img src={myCvImg} loading='lazy' title="Резюме" alt="Резюме" width="100" height="100" /></Link>
        </div>
        <div className="_customer-btns">
          <AppBtn link="/" text="Назад" />
          <AppBtn link="/portfolio" text="Далее" />
        </div>
      </main>
    </section>
  )
}