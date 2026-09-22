import { Link } from 'react-router-dom'
import { CourseList } from '../widgets/course-list/CourseList'
import { Container } from '../shared/ui/Container'
import "../shared/style/contact.css"

export function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-content">
            <span className="hero-label">CODESTART ACADEMY</span>

            <h1>
              Учись программировать.
              <br />
              Создавай реальные проекты.
            </h1>

            <p>
              Практические курсы по HTML, CSS, Bootstrap, Git,
              JavaScript и React.
            </p>

            <Link to="/courses" className="hero-button">
              Смотреть курсы
            </Link>
          </div>
        </Container>
      </section>

      <section className="courses-section">
        <Container>
          <div className="section-heading">
            <span>НАЧНИ СЕЙЧАС</span>
            <h2>Наши курсы</h2>
          </div>

          <CourseList />
        </Container>
      </section>

      <section className="teacher-section">
        <Container>
          <div className="teacher-content">
            <span className="teacher-label">ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</span>

            <h2>Хотите учиться с преподавателем?</h2>

            <p>
              Если вам нужна помощь преподавателя, индивидуальные занятия
              или подробное объяснение материала — напишите нам в Telegram
              или позвоните по телефону.
            </p>

            <div className="teacher-actions">
              <a
                href="https://t.me/Badriddindev1dev"
                target="_blank"
                rel="noopener noreferrer"
                className="teacher-button"
              >
                Написать в Telegram
              </a>

              <a
                href="tel:+998887818810"
                className="teacher-button teacher-button-secondary"
              >
                Позвонить
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
