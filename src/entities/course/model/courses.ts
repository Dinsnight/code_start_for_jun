import type { Course } from './types'

export const courses: Course[] = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Изучим структуру веб-страниц с нуля.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    level: 'Beginner',
    lessonsCount: 12,
    duration: '6 часов',
    color: '#e44d26',
  },

  {
    id: 'css',
    title: 'CSS',
    description: 'Научимся создавать красивые интерфейсы.',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    level: 'Beginner',
    lessonsCount: 12,
    duration: '7 часов',
    color: '#264de4',
  },

  {
    id: 'bootstrap',
    title: 'Bootstrap',
    description: 'Создаём адаптивные сайты быстро.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    level: 'Beginner',
    lessonsCount: 12,
    duration: '5 часов',
    color: '#7952b3',
  },

  {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Научимся работать с Git и публиковать проекты.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498',
    level: 'Beginner',
    lessonsCount: 12,
    duration: '5 часов',
    color: '#f1502f',
  },

  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Изучаем программирование и современный JavaScript.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    level: 'Beginner',
    lessonsCount: 12,
    duration: '10 часов',
    color: '#f7df1e',
  },

  {
    id: 'react',
    title: 'React',
    description: 'Создаём современные React-приложения.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    level: 'Intermediate',
    lessonsCount: 12,
    duration: '12 часов',
    color: '#61dafb',
  },
]