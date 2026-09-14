import { Container } from '../shared/ui/Container'
import { CourseList } from '../widgets/course-list/CourseList'

export function CoursesPage() {
  return (
    <main className="page">
      <Container>
        <div className="page-heading">
          <span>ОБУЧЕНИЕ</span>
          <h1>Все курсы</h1>
          <p>
            Выбери направление и начни изучать программирование.
          </p>
        </div>

        <CourseList />
      </Container>
    </main>
  )
}