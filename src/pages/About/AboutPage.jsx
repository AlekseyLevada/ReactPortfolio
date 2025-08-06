import styles from './styles/about-page.module.scss'
import { skills_list } from '../../lib/skills.js'
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.jsx'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar.jsx'
import { AppBtn } from '../../components/AppBtn/AppBtn.jsx'
import { Page } from '../../components/Page/Page.jsx'
import { Title } from '../../components/Title/Title.jsx'
import { Subtitle } from '../../components/Subtitle/Subtitle.jsx'
import { Suptitle } from '../../components/Suptitle/Suptitle.jsx'
import { Minortitle } from '../../components/Minortitle/Minortitle.jsx'
import { List } from '../../components/List/List.jsx'
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
    <Page>
      <Navbar />
      <BurgerMenu />
      <Title>Привет, давай&nbsp;знакомиться!</Title>
      <Subtitle>Левада Алексей</Subtitle>
      <List>
        <li>Frontend-разработчик, Москва, 35 лет</li>
        <li>2014 год. - первый "Hello World"</li>
        <li>С 2015 года погружен в веб-разработку. Обожаю Frontend за мгновенную визуальную отдачу — когда код превращается в живой интерфейс</li>
      </List>
      <Subtitle>Мой путь:</Subtitle>
      <List>
        <li>Начал с HTML/CSS, нарезал десятки макетов</li>
        <li>Перешел к JavaScript, учился на реальных проектах и через <a href="https://learn.javascript.ru/" target="_blank">Learn&nbsp;JavaScript</a></li>
        <li>Углубил знания в <a href="https://inordic.ru/" target='_blank'>"INordic IT School"</a> и <a href="https://skillbox.ru/" target='_blank'>"Skillbox"</a>, где довел навыки до production-уровня</li>
        <li>Первый коммерческий опыт получил в командах с сильными наставниками</li>
      </List>
      <Subtitle>Почему стоит связаться?</Subtitle>
      <List>
        <li>Люблю сложные задачи, где нужно копать в документацию и экспериментировать. Готов обсуждать как пет-проекты, так и серьезные продукты</li>
        <li><i>P.S. Мой код — не просто функционал, это UX-история, которую почувствует пользователь.</i></li>
      </List>
      <Subtitle>Хард скилы</Subtitle>
      <ul className={styles.skillsGrid}>
        {
          skills_list.map(skill => {
            return (
              <li className={styles.skillGridItem} key={skill.id + skill.name} data-aos="fade-up" data-aos-delay="100">
                <Link to={skill.link}>
                  <p>
                    {skill.name}
                  </p>
                  <img src={skill.img} alt={skill.name} loading='lazy' draggable="false" width="100" height="100" />
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Subtitle>Софт скилы</Subtitle>
      <List>
        <li>Коммуникация – общение с командой, заказчиками, документация</li>
        <li>Работа в команде – коллаборация с PM, QA, дизайнерами, другими разработчиками</li>
        <li>Тайм-менеджмент – оценка сроков, приоритизация задач</li>
        <li>Критическое мышление – анализ проблем, поиск решений</li>
        <li>Обучаемость – быстрое освоение новых технологий</li>
        <li>Адаптивность – работа в условиях изменений (Agile/Scrum)</li>
        <li>Эмпатия – понимание потребностей пользователей и коллег</li>
        <li>Ответственность – соблюдение дедлайнов, качество кода</li>
      </List>
      <Subtitle>Опыт работы</Subtitle>
      <Suptitle><i>Веб-студия CodeIT | Май 2015 — Июнь 2018</i></Suptitle>
      <Minortitle>Frontend-разработчик (Junior) / Верстальщик</Minortitle>
      <Minortitle>Основные задачи:</Minortitle>
      <List>
        <li>Верстка Pixel Perfect макетов из Figma/Photoshop с использованием HTML5, CSS3 (SCSS/SASS), JavaScript (ES6+)</li>
        <li>Адаптация под мобильные устройства</li>
        <li>Разработка интерактивных элементов (анимации, формы, слайдеры) на чистом JS и с применением библиотек (jQuery, GSAP, AOS)</li>
        <li>Интеграция с CMS и фреймворками</li>
        <li>Оптимизация скорости загрузки страниц (минификация CSS/JS, сжатие изображений, ленивая загрузка)</li>
        <li>Тестирование и исправление багов в разных браузерах (Chrome, Firefox, Safari, Edge)</li>
        <li>Работа с Git (GitHub/GitLab) в команде, участие в код-ревью</li>
      </List>
      <Minortitle>Достижения:</Minortitle>
      <List>
        <li>Успешно завершил 10+ проектов (лендинги, корпоративные сайты, интернет-магазины)</li>
        <li>Улучшил производительность одного из ключевых проектов, сократив время загрузки на 25%</li>
        <li> Освоил React на базовом уровне и внедрил его в один из внутренних проектов</li>
      </List>
      <Suptitle><i>Пульс Цен | Июнь 2022 — Август 2025</i></Suptitle>
      <Minortitle>Frontend-разработчик (Middle) </Minortitle>
      <Minortitle>React/Vue, TypeScript, Redux/Zustand, Node.js, Nest.js, БЭМ, SCSS модули</Minortitle>
      <Minortitle>Основные задачи:</Minortitle>
      <List>
        <li>Верстка Pixel Perfect (Figma/Photoshop)</li>
        <li>Адаптация под мобильные устройства</li>
        <li>Разработка адаптивных и отзывчивых интерфейсов</li>
        <li>Создание и поддержка UI-компонентов</li>
        <li>Реализация анимаций и интерактивных элементов</li>
        <li>Интеграция с API и работа с данными</li>
        <li>Устранение ошибок в функционале и верстке</li>
        <li>Преобразование и валидация данных</li>
        <li>Настройка API-маршрутов</li>
        <li>Организация взаимодействия с базой данных(MySQL, MongoDB)</li>
      </List>
      <Minortitle>Достижения:</Minortitle>
      <List>
        <li>Улучшил загрузку приложений, а таже клиентских сайтов на 30%</li>
        <li>Участие в улучшении кодовой базы и внедрении лучших практик</li>
        <li>Автоматизировал процессы деплоя продукции из загруженных клиентом файлов XLS, XML</li>
      </List>
      <Subtitle>Резюме</Subtitle>
      <div className={styles.resumeFile}>
        <Link onClick={() => { downloadFile(cvUrl) }} Link><img src={myCvImg} loading='lazy' title="Резюме" alt="Резюме" width="100" height="100" /></Link>
      </div>
      <div className={styles.appBtns}>
        <AppBtn className={styles.appBtn} link="/" text="Назад" />
        {/* <AppBtn className={styles.appBtn} link="/portfolio" text="Далее" /> */}
      </div>
    </Page>
  )
}