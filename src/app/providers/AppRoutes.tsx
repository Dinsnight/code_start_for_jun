import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { CoursesPage } from '../../pages/CoursesPage'
import { CoursePage } from '../../pages/CoursePage'
import { LessonPage } from '../../pages/LessonPage'
import { ProfilePage } from '../../pages/ProfilePage'
import { LoginPage } from '../../pages/LoginPage'
import { RegisterPage } from '../../pages/RegisterPage'



export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/courses"
        element={<CoursesPage />}
      />

      <Route
        path="/courses/:id"
        element={<CoursePage />}
      />

      <Route
        path="/courses/:courseId/lessons/:lessonId"
        element={<LessonPage />}
      />

      <Route
        path="/profile"
        element={<ProfilePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>
  )
}