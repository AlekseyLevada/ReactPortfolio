import './styles/style.scss'
import { skills_list } from '../../lib/skills.js'
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
          <p>
            Я Левада Алексей&nbsp;- Frontend разработчик. Живу в&nbsp;Москве. Мне&nbsp;- 35 лет.
          </p>
          <p>
            В&nbsp;2015&nbsp;году заинтересовался Web(ом) и своим первым - "Hello&nbsp;World".
          </p>
          <p>
            Почему Frontend? Обожаю видеть результат своей работы!
          </p>
          <p>
            Все начиналось с HTML и CSS3. Верстал блоки, изучал поведение элементов. После,  переключился на реальные макеты. Далее от статики решил перейти к интерактиву. Тут нужен JS, смотрел ролики на Youtube, читал литературу. Одним из основных был <a href="https://learn.javascript.ru/" target="_blank">Learn&nbsp;JavaScript</a>.
          </p>
          <p>
            Проходил разные бесплатные курсы по программированию, связанные с HTML, CSS3, Java Script.
          </p>
          <p>
            Для более углубленного изучения, поступил в компьютерную академию <a href="https://inordic.ru/" target='_blank'>"NORDIC IT SCHOOL"</a>, где получил хорошую порцию дополнительных знаний в области Web-разработки, а также закрепил изученные материалы на собственных пет-проектах.
          </p>
          <p>
            Первичный опыт в основном приобретал на своих небольших пет-проектах и работе на фрилансе, параллельно изучая документацию.
          </p>
          <p>
            Коммерческий опыт, приобретал с помощью выполнения задач по проектам, под руководством опытных наставников.
          </p>
        </div>

        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Качества
        </h2>
        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Ответственность.
            </li>
            <li>
              Нацеленность только на высокий результат.
            </li>
            <li>
              Ответственный подход к выполняемой работе.
            </li>
          </ul>
        </div>

        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Образование
        </h2>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              2008 - 2011г.г. Донецкий национальный технический университет. Физико-математический факультет Металлургия черных и цветных металлов.
            </li>
            <li>
              2022 - 2023г.г. Компьютерная академия iNordic IT School. Направление: Front-end разработка.
            </li>
          </ul>
        </div>

        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Фреймворки и библиотеки
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
          Опыт работы
        </h2>
        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          ОАО&nbsp;«Силур» Август&nbsp;2008г. — май&nbsp;2022&nbsp;г.
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Начальник участка:
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Обязанности:
        </h4>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Руководство возглавляемым производственным участком.
            </li>
            <li>
              Обеспечение выполнения участком в установленные сроки производственных заданий по объему производства продукции, качеству, заданной номенклатуре.
            </li>
            <li>
              Повышение производительности труда.
            </li>
            <li>
              Расстановка рабочих и бригад, формирование бригад (их количественный, профессиональный и квалификационный состав).
            </li>
            <li>
              Контроль и соблюдение технологических процессов, оперативное устранение нарушений.
            </li>
            <li>
              Проверка качества выпускаемой продукции.
            </li>
            <li>
              Разработка плана по реконструкции участка, ремонту технологического оборудования.
            </li>
            <li>
              Выполнение производственных заданий, утвержденными производственными планами и графиками.
            </li>
            <li>
              Осуществление производственных инструктажей рабочих, проведение мероприятий по выполнению правил охраны труда, техники безопасности и производственной санитарии.
            </li>
            <li>
              Контроль соблюдения рабочими правил охраны труда и техники безопасности, производственной и трудовой дисциплины, правил внутреннего трудового распорядка.
            </li>
            <li>
              Подготовка предложений о поощрении рабочих или применении мер материального воздействия, о наложении дисциплинарных взысканий на нарушителей производственной и трудовой дисциплины.
            </li>
          </ul>
        </div>

        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Достижения:
        </h4>
        <div className="_customer-info _customer-about-page__info">
          <p>
            Внедрил оптимизированную технологию производства органического сердечника для стальных канатов, по сокращению финансово-производственных расходов.
          </p>
        </div>
        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          «CodeIT» Сентябрь&nbsp;2016г. — июнь&nbsp;2018&nbsp;г.
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Frontend разработчик:
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Обязанности
        </h4>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Адаптивная и отзывчивая верстка.
            </li>
            <li>
              Верстка компонентов приложения / сайта.
            </li>
            <li>
              Добавление анимации элементам верстки.
            </li>
            <li>
              Отрисовка данных на Frontend.
            </li>
            <li>
              Фикс багов функционала.
            </li>
            <li>
              Фикс багов стилей и верстки.
            </li>
            <li>
              Преобразование типов данных.
            </li>
            <li>
              Реализация маршрутов API.
            </li>
            <li>
              Реализация CRUD к БД.
            </li>
          </ul>
        </div>

        <h3 className='_customer-suptitle _customer-about-page__suptitle'>
          Портал «Пульс Цен» Май 2023г. — текущее время.
        </h3>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Frontend разработчик
        </h4>
        <h4 className='_customer-suptitle--sm _customer-about-page__suptitle--sm'>
          Обязанности
        </h4>

        <div className="_customer-list _customer-about-page__list">
          <ul>
            <li>
              Адаптивная и отзывчивая верстка страниц (СК - сайта клиента).
            </li>
            <li>
              Верстка компонентов приложения для СК.
            </li>
            <li>
              Реализация скриптов для элементов сайтов и приложений (ФОС).
            </li>
            <li>
              Фикс багов функционала СК.
            </li>
            <li>
              Фикс багов стилей и верстки младшего персонала.
            </li>
            <li>
              Работа с данными (преобразование и использование).
            </li>
            <li>
              Работа с серверными данными (внесение новой информции, а также их редактирование).
            </li>
          </ul>
        </div>
        <h2 className='_customer-subtitle _customer-about-page__subtitle'>
          Тут ты можешь скачать и&nbsp;распечатать мое резюме
        </h2>
        <div className="_customer-resume__file">
          <Link onClick={() => { downloadFile(cvUrl) }} Link><img src={myCvImg} loading='lazy' title="Резюме" alt="Резюме" width="100" height="100"/></Link>
        </div>
        <div className="_customer-btns">
          <AppBtn link="/" text="Назад" />
          <AppBtn link="/portfolio" text="Далее" />
        </div>
      </main>
    </section>
  )
}