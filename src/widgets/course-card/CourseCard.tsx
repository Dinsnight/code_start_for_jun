import { Link } from 'react-router-dom'
import type { Course } from '../../entities/course/model/types'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-card-content">
        <span
          className="course-badge"
          style={{ backgroundColor: course.color }}
        >
          {course.level}
        </span>

        <h3>{course.title}</h3>

        <p>{course.description}</p>

        <div className="course-info">
          <span>{course.lessonsCount} уроков</span>
          <span>{course.duration}</span>
        </div>

        <Link to={`/courses/${course.id}`} className="course-button">
          Начать обучение
        </Link>
      </div>
    </article>
  )
}