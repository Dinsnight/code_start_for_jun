import { Link, useParams } from "react-router-dom";
import { courses } from "../entities/course/model/courses";
import { javascriptLessons } from "../entities/lesson/model/javascriptLessons";
import { htmlLessons } from "../entities/lesson/model/htmlLessons";
import { Container } from "../shared/ui/Container";
import { cssLessons } from "../entities/lesson/model/cssLessons";
import { bootstrapLessons } from "../entities/lesson/model/bootstrapLessons";
import { gitLessons } from "../entities/lesson/model/gitLessons";
import { reactLessons } from "../entities/lesson/model/reactLessons";
import { pythonLessons } from "../entities/lesson/model/pythonLessons";
import "../shared/style/lesson.css"
export function LessonPage() {
  const { courseId, lessonId } = useParams();

  const course = courses.find((item) => item.id === courseId);

  const lessons =
    courseId === "javascript"
      ? javascriptLessons
      : courseId === "html"
        ? htmlLessons
        : courseId === "css"
          ? cssLessons
          : courseId === "bootstrap"
            ? bootstrapLessons
            : courseId === "git"
              ? gitLessons
              : courseId === "react"
                ? reactLessons
                : courseId === "python"
                  ? pythonLessons
                  : [];
  const lesson = lessons.find((item) => item.id === lessonId);

  if (!course || !lesson) {
    return (
      <Container>
        <h1>Урок не найден</h1>
        <p>Course: {courseId}</p>
        <p>Lesson: {lessonId}</p>

        <Link to="/courses">Вернуться к курсам</Link>
      </Container>
    );
  }

  return (
    <main className="page">
      <Container>
        <Link to={`/courses/${course.id}`}>← Вернуться к курсу</Link>

        <article className="lesson-content">
          <span className="hero-label">{course.title.toUpperCase()}</span>

          <h1>{lesson.title}</h1>

          <p>{lesson.description}</p>

          <div className="lesson-text">
            {lesson.content.split("\n").map((line, index) => (
              <p key={index}>{line || "\u00A0"}</p>
            ))}
          </div>
          {lesson.videoUrl ? (
            <a
              href={lesson.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-video"
            >
              ▶ Смотреть видео урока
            </a>
          ) : (
            <div className="lesson-video">
              🎬 Видео для этого урока пока нет
            </div>
          )}

          <div className="task-box">
            <div className="task-label">PRACTICE</div>

            <h2>Практическое задание</h2>

            <pre>{lesson.task}</pre>
          </div>

          <Link to={`/courses/${course.id}`}>
            <button className="complete-button">✓ Завершить урок</button>
          </Link>
        </article>
      </Container>
    </main>
  );
}
