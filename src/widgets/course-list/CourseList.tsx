import { courses } from '../../entities/course/model/courses'
import { CourseCard } from '../course-card/CourseCard'

export function CourseList() {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}