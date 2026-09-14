export interface Course {
  id: string
  title: string
  description: string
  image: string
  level: 'Beginner' | 'Intermediate'
  lessonsCount: number
  duration: string
  color: string
}

export interface Lesson {
  id: string
  courseId: string
  order: number
  title: string
  description: string
  content: string
  task: string
}