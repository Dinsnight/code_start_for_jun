import { Link } from 'react-router-dom'
import { CourseList } from '../widgets/course-list/CourseList'
import { Container } from '../shared/ui/Container'

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
    </>
  )
}