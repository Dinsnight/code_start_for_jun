export const routes = {
  home: '/',
  courses: '/courses',
  course: (id: string) => `/courses/${id}`,
  lesson: (courseId: string, lessonId: string) =>
    `/courses/${courseId}/lessons/${lessonId}`,
  login: '/login',
  register: '/register',
  profile: '/profile',
}