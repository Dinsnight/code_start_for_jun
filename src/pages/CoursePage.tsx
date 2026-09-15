import { Link, useParams } from "react-router-dom";

import { courses } from "../entities/course/model/courses";
import { Container } from "../shared/ui/Container";

import { javascriptLessons } from "../entities/lesson/model/javascriptLessons";
import { htmlLessons } from "../entities/lesson/model/htmlLessons";
import { cssLessons } from "../entities/lesson/model/cssLessons";
import { bootstrapLessons } from "../entities/lesson/model/bootstrapLessons";
import { gitLessons } from "../entities/lesson/model/gitLessons";
import { reactLessons } from "../entities/lesson/model/reactLessons";
import { pythonLessons } from "../entities/lesson/model/pythonLessons";

export function CoursePage() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <Container>
        <h1>Курс не найден</h1>
      </Container>
    );
  }

 const lessons =
  course.id === 'javascript'
    ? javascriptLessons
    : course.id === 'html'
      ? htmlLessons
      : course.id === 'css'
        ? cssLessons
        : course.id === 'bootstrap'
          ? bootstrapLessons
          : course.id === 'git'
            ? gitLessons
            : course.id === 'react'
              ? reactLessons
              : course.id === 'python'
                ? pythonLessons
                : []

  return (
    <main className="page">
      <Container>
        <div className="course-header">
          <img src={course.image} alt={course.title} />

          <div>
            <span
              className="course-badge"
              style={{
                backgroundColor: course.color,
              }}
            >
              {course.level}
            </span>

            <h1>{course.title}</h1>

            <p>{course.description}</p>

            <strong>
              {course.lessonsCount} уроков · {course.duration}
            </strong>
          </div>
        </div>

        <div className="lesson-list">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/courses/${course.id}/lessons/${lesson.id}`}
              className="lesson-item"
            >
              <span>{lesson.order}</span>

              <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
