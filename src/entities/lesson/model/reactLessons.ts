import type { Lesson } from "../../course/model/types";

export const reactLessons: Lesson[] = [
  {
    id: 'react-1',
    courseId: 'react',
    order: 1,
    title: 'Введение в React',
    description: 'Что такое React, компоненты и JSX',
    content: `
# Введение в React

React — JavaScript-библиотека для создания
пользовательских интерфейсов.

React разработан компанией Meta.

React используется для создания:

- сайтов;
- интернет-магазинов;
- dashboard;
- образовательных платформ;
- социальных сетей;
- SPA-приложений;
- административных панелей.

# Почему React?

В обычном HTML мы создаём страницу
большим количеством HTML-кода.

React позволяет разбивать интерфейс
на независимые компоненты.

Например:

Header
Navbar
Sidebar
Button
Card
Footer

Каждый компонент отвечает
за свою часть интерфейса.

# Компоненты

Пример:

function Welcome() {
  return <h1>Hello React!</h1>
}

Компонент можно использовать:

<Welcome />

# JSX

JSX позволяет писать HTML-подобный код
внутри JavaScript.

const name = "Alex";

function App() {
  return (
    <h1>
      Hello, {name}!
    </h1>
  );
}

JSX похож на HTML,
но это не обычный HTML.

Например:

className вместо class.

# React application

Современный React-проект
часто создаётся с помощью Vite.

Пример:

npm create vite@latest my-app
cd my-app
npm install
npm run dev

# React DOM

React подключается к HTML
через createRoot:

import { createRoot } from "react-dom/client";

createRoot(
  document.getElementById("root")
).render(
  <App />
);

# Главное

React помогает создавать
интерфейсы из переиспользуемых компонентов.
`,
    task: `
Создай новый React-проект
с помощью Vite.

Используй:

React
JavaScript
Vite

Создай компонент:

Welcome

Он должен отображать:

"Добро пожаловать в React!"

Затем измени компонент,
чтобы он отображал:

"Я изучаю React!"

Дополнительное задание:

Создай компоненты:

Header
Main
Footer

Собери их вместе в App.

Итоговая структура:

App
├── Header
├── Main
└── Footer
`,
  },

  {
    id: 'react-2',
    courseId: 'react',
    order: 2,
    title: 'Компоненты и JSX',
    description: 'Создание компонентов и работа с JSX',
    content: `
# React Components

Компонент — это функция,
которая возвращает JSX.

Пример:

function Button() {
  return (
    <button>
      Нажми меня
    </button>
  );
}

Использование:

<Button />

# Именование

React-компоненты должны
начинаться с большой буквы.

Правильно:

function Header() {}

Неправильно:

function header() {}

# JSX

Можно использовать JavaScript
внутри JSX.

const name = "Alex";

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

# Условия

Можно использовать
тернарный оператор:

const isAuth = true;

return (
  <div>
    {isAuth ? (
      <p>Вы вошли</p>
    ) : (
      <p>Войдите в аккаунт</p>
    )}
  </div>
);

# Массивы

Можно выводить элементы
через map:

const courses = [
  "HTML",
  "CSS",
  "JavaScript"
];

return (
  <ul>
    {courses.map((course) => (
      <li key={course}>
        {course}
      </li>
    ))}
  </ul>
);

# key

React требует key
при рендеринге списка.

key помогает React понимать,
какой элемент изменился.
`,
    task: `
Создай React-приложение
"CodeStart".

Создай компоненты:

Header
Hero
CourseList
CourseCard
Footer

Создай массив:

HTML
CSS
JavaScript
React

Отобрази курсы
через map().

Каждый курс должен
быть отдельной карточкой.

Карточка должна содержать:

Название
Описание
Кнопку

Используй key.

Дополнительно:

Добавь условие:

если курс бесплатный —
покажи "FREE".

Если платный —
покажи "PREMIUM".
`,
  },

  {
    id: 'react-3',
    courseId: 'react',
    order: 3,
    title: 'Props',
    description: 'Передача данных между компонентами',
    content: `
# Props

Props позволяют передавать
данные от родительского компонента
дочернему.

Например:

function User({ name }) {
  return (
    <h2>
      {name}
    </h2>
  );
}

Использование:

<User name="Alex" />

# Несколько props

function Course({
  title,
  level,
  lessons
}) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{level}</p>
      <span>
        {lessons} уроков
      </span>
    </article>
  );
}

Использование:

<Course
  title="React"
  level="Beginner"
  lessons={12}
/>

# Props — только для чтения

Компонент не должен
изменять props напрямую.

Props позволяют создавать
переиспользуемые компоненты.

Например один CourseCard
можно использовать
для всех курсов.
`,
    task: `
Создай компонент:

CourseCard

Он должен принимать:

title
description
level
lessons
price

Например:

<CourseCard
  title="React"
  description="Изучение React"
  level="Intermediate"
  lessons={12}
  price={300000}
/>

Создай массив из 6 курсов.

Через map передай данные
в CourseCard.

Дополнительно:

Добавь prop:

isPopular

Если true:

"🔥 Популярный курс"

Если false —
ничего не показывай.
`,
  },

  {
    id: 'react-4',
    courseId: 'react',
    order: 4,
    title: 'useState',
    description: 'Состояние компонента и интерактивность',
    content: `
# State

State — это данные,
которые могут изменяться
во время работы приложения.

Для состояния используется
useState.

Импорт:

import { useState } from "react";

Пример:

const [count, setCount] =
  useState(0);

Здесь:

count — текущее значение.

setCount — функция изменения.

0 — начальное значение.

Изменение:

setCount(count + 1);

# События

React поддерживает события:

onClick
onChange
onSubmit
onMouseEnter
onKeyDown

Пример:

<button
  onClick={() => {
    setCount(count + 1);
  }}
>
  +
</button>

# Functional update

Лучше использовать:

setCount(
  (prev) => prev + 1
);

Это особенно важно,
когда изменение зависит
от предыдущего состояния.

# State не должен изменяться
напрямую.

Неправильно:

count = count + 1;

Правильно:

setCount(count + 1);
`,
    task: `
Создай Counter.

На странице:

Значение: 0

Кнопки:

-
+
Reset

При + число увеличивается.

При - уменьшается.

Reset возвращает 0.

Дополнительное задание:

Создай:

Like button

По нажатию:

♡ → ❤️

И увеличивай количество лайков.

Ещё создай:

"Скрыть / Показать"

которая показывает
или скрывает текст.
`,
  },

  {
    id: 'react-5',
    courseId: 'react',
    order: 5,
    title: 'Формы и управляемые компоненты',
    description: 'Input, checkbox, select и submit',
    content: `
# Forms в React

React позволяет
контролировать значение формы
через state.

Пример:

const [name, setName] =
  useState("");

<input
  value={name}
  onChange={(event) =>
    setName(event.target.value)
  }
/>

Теперь React контролирует input.

# onChange

event.target.value
содержит текущее значение.

# Submit

Форму можно обработать:

function handleSubmit(event) {
  event.preventDefault();

  console.log(name);
}

<form onSubmit={handleSubmit}>
  ...
</form>

preventDefault()
не позволяет браузеру
перезагрузить страницу.

# Checkbox

Можно хранить:

const [checked, setChecked] =
  useState(false);

# Select

Также можно контролировать:

<select value={course}>
  ...
</select>
`,
    task: `
Создай форму регистрации.

Поля:

Имя
Email
Пароль
Возраст
Выбор курса

Checkbox:

"Я принимаю условия"

Кнопка:

"Зарегистрироваться"

После submit
выведи данные пользователя
в console.log().

Дополнительно:

Покажи сообщение:

"Регистрация успешна"

после отправки формы.
`,
  },

  {
    id: 'react-6',
    courseId: 'react',
    order: 6,
    title: 'Списки, фильтрация и поиск',
    description: 'Работа с массивами и динамическим интерфейсом',
    content: `
# Rendering Lists

React часто использует
map() для отображения данных.

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "John" },
  { id: 3, name: "Anna" }
];

users.map((user) => (
  <div key={user.id}>
    {user.name}
  </div>
));

# Filter

Можно фильтровать данные:

const students =
  users.filter(
    (user) => user.age >= 18
  );

# Search

Например:

const filtered =
  courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

# Практический интерфейс

Можно создать:

Input поиска
       ↓
Search state
       ↓
filter()
       ↓
Course list
`,
    task: `
Создай страницу
"Все курсы".

Создай минимум 8 курсов.

У каждого:

id
title
level
category

Добавь:

Input поиска.

Пользователь пишет:

react

И должен увидеть
только React-курсы.

Добавь фильтр по уровню:

All
Beginner
Intermediate

Добавь сообщение:

"Курсы не найдены"

если результатов нет.
`,
  },

  {
    id: 'react-7',
    courseId: 'react',
    order: 7,
    title: 'useEffect',
    description: 'Побочные эффекты и работа с жизненным циклом',
    content: `
# useEffect

useEffect используется
для побочных эффектов.

Например:

- запросы к API;
- работа с localStorage;
- подписки;
- таймеры;
- изменение title;
- работа с внешними библиотеками.

Импорт:

import {
  useEffect,
  useState
} from "react";

Пример:

useEffect(() => {
  console.log("Component mounted");
}, []);

Пустой массив означает,
что эффект выполняется
после первого рендера.

# Dependency Array

useEffect(() => {
  console.log(count);
}, [count]);

Теперь эффект запускается,
когда меняется count.

# Cleanup

Некоторые эффекты
нужно очищать.

Например:

useEffect(() => {
  const timer =
    setInterval(() => {
      console.log("tick");
    }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

Cleanup предотвращает
утечки ресурсов.
`,
    task: `
Создай компонент Clock.

Показывай текущее время.

Используй:

useState
useEffect
setInterval

Время должно обновляться
каждую секунду.

Обязательно очисти interval
при удалении компонента.

Дополнительно:

Измени document.title:

"CodeStart | 14:35:20"
`,
  },

  {
    id: 'react-8',
    courseId: 'react',
    order: 8,
    title: 'Работа с API и Fetch',
    description: 'Получение данных с сервера',
    content: `
# API

Frontend часто получает данные
с backend API.

Например:

GET
https://jsonplaceholder.typicode.com/users

С Fetch:

fetch(url)
  .then((response) =>
    response.json()
  )
  .then((data) => {
    console.log(data);
  });

В React обычно создают
state для:

data
loading
error

Например:

const [users, setUsers] =
  useState([]);

const [loading, setLoading] =
  useState(true);

const [error, setError] =
  useState("");

Затем:

useEffect(() => {
  fetch(url)
    .then((response) =>
      response.json()
    )
    .then((data) => {
      setUsers(data);
    })
    .catch(() => {
      setError("Ошибка");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);

# UI состояния

Хороший интерфейс должен
обрабатывать:

Loading

Error

Success

Empty state
`,
    task: `
Создай страницу Users.

Используй API:

https://jsonplaceholder.typicode.com/users

Получай пользователей
через fetch.

Покажи:

- Loading...
- Ошибку;
- список пользователей.

Для каждого пользователя
покажи:

name
email
phone
website

Добавь поиск по имени.

Дополнительно:

При клике на пользователя
показывай его подробную информацию.
`,
  },

  {
    id: 'react-9',
    courseId: 'react',
    order: 9,
    title: 'React Router',
    description: 'Создание многостраничного SPA',
    content: `
# React Router

React Router позволяет
создавать маршруты
в React-приложении.

Установка:

npm install react-router-dom

Основные компоненты:

BrowserRouter
Routes
Route
Link
NavLink

Пример:

<Routes>
  <Route
    path="/"
    element={<Home />}
  />

  <Route
    path="/courses"
    element={<Courses />}
  />

  <Route
    path="/profile"
    element={<Profile />}
  />
</Routes>

# Link

Для перехода:

<Link to="/courses">
  Курсы
</Link>

Не нужно использовать
обычный <a> для внутренних
маршрутов SPA.

# Dynamic route

Можно создать:

/courses/:id

Например:

/courses/react

Получить параметр:

const { id } =
  useParams();

# 404

Можно создать маршрут:

<Route
  path="*"
  element={<NotFound />}
/>
`,
    task: `
Создай React-приложение
CodeStart Academy.

Создай страницы:

/
Home

/courses
Courses

/courses/:id
Course

/lessons/:id
Lesson

/profile
Profile

/login
Login

Создай Header.

Добавь навигацию:

Главная
Курсы
Профиль
Войти

Для внутренних переходов
используй Link или NavLink.

Создай страницу 404.
`,
  },

  {
    id: 'react-10',
    courseId: 'react',
    order: 10,
    title: 'Архитектура React-проекта',
    description: 'Компоненты, папки, переиспользование и структура',
    content: `
# Архитектура

Когда приложение маленькое,
можно хранить компоненты
в нескольких файлах.

Но большой проект
нуждается в структуре.

Например:

src/
├── components/
├── pages/
├── hooks/
├── services/
├── utils/
├── assets/
└── App.jsx

# Components

Переиспользуемые UI-компоненты:

Button
Input
Card
Modal
Header

# Pages

Большие страницы:

HomePage
CoursesPage
ProfilePage

# Hooks

Переиспользуемая логика:

useAuth
useFetch
useDebounce

# Services

Работа с API:

api.js
usersApi.js
coursesApi.js

# Separation of concerns

Компонент должен
по возможности отвечать
за одну задачу.

Не стоит создавать
огромный компонент
на 1000 строк.

Лучше разделить:

CoursePage
CourseHeader
CourseList
CourseCard
CourseProgress

# Переиспользование

Если Button нужен
в 10 местах,
не нужно писать
10 разных кнопок.

Создай:

<Button />

и используй его
везде.
`,
    task: `
Создай структуру
React-проекта:

src/
├── components/
│   ├── Header/
│   ├── Button/
│   ├── Card/
│   └── Modal/
│
├── pages/
│   ├── Home/
│   ├── Courses/
│   ├── Course/
│   └── Profile/
│
├── hooks/
├── services/
├── utils/
└── assets/

Создай минимум:

Header
Button
CourseCard
CourseList

Не дублируй код.

CourseCard должен
принимать данные через props.
`,
  },

  {
    id: 'react-11',
    courseId: 'react',
    order: 11,
    title: 'React-проект: Dashboard',
    description: 'Объединяем state, props, API, Router и формы',
    content: `
# Большой практический проект

До этого мы изучили:

Components
JSX
Props
State
Forms
Lists
Filtering
useEffect
Fetch
Router
Architecture

Теперь объединим знания.

Создадим Dashboard
образовательной платформы.

# Структура

Dashboard

Sidebar
Header

Main:

Statistics
Courses
Recent lessons
Progress

# Statistics

Например:

6 курсов
24 урока
18 завершено
75% progress

# Course Card

Каждая карточка:

Название
Описание
Progress
Уровень
Кнопка

# State

Можно хранить:

selectedCourse
search
progress
user

# API

Можно получать
список курсов
через API.

# Router

Страницы:

/dashboard
/dashboard/courses
/dashboard/profile

# Forms

Добавим форму
редактирования профиля.
`,
    task: `
Создай Dashboard
для CodeStart Academy.

Страницы:

/dashboard
/dashboard/courses
/dashboard/profile

Dashboard должен иметь:

Header
Sidebar

Statistics:

Courses
Lessons
Completed
Progress

Courses page:

минимум 6 карточек.

Каждая карточка:

Название
Level
Progress
Button

Добавь поиск курсов.

Profile:

Имя
Email
Bio

Создай форму
редактирования профиля.

Используй:

Components
Props
useState
useEffect
Forms
Router
map
filter

Дополнительно:

Сохраняй имя пользователя
в localStorage.
`,
  },

  {
    id: 'react-12',
    courseId: 'react',
    order: 12,
    title: 'Финальный проект — CodeStart Academy',
    description: 'Полноценное React-приложение',
    content: `
# Финальный проект

Теперь создаём
полноценное React-приложение.

Проект:

CodeStart Academy

Это образовательная
платформа для изучения
программирования.

# Страницы

Home
Courses
Course
Lesson
Profile
Login
Register
Dashboard
404

# Home

Hero:

"Учись программировать"

Кнопка:

"Начать обучение"

Популярные курсы.

Преимущества.

Отзывы.

Footer.

# Courses

Показываем:

HTML
CSS
Bootstrap
Git & GitHub
JavaScript
React

Добавляем:

поиск;
фильтрацию;
сортировку.

# Course

Показываем:

Название
Описание
Количество уроков
Прогресс

Список уроков.

# Lesson

Каждый урок:

Theory
Example
Practice
Complete button

# Progress

Пользователь может
завершать уроки.

Например:

8 / 12

Progress:

66%

# Authentication

Создай простой
Login / Register UI.

Данные пользователя
можно временно хранить
в localStorage.

# Profile

Показывай:

Имя
Email
Количество курсов
Количество уроков
Общий progress

# Architecture

Используй
компонентный подход.

Не создавай
один огромный App.jsx.

Разделяй:

components
pages
hooks
services
utils

# Главное

Финальный проект должен
выглядеть как настоящий
образовательный сервис,
а не как набор учебных
страниц.
`,
    task: `
Создай полноценную
React-платформу:

CODESTART ACADEMY

Обязательные страницы:

/
Home

/courses
Courses

/courses/:id
Course

/courses/:courseId/lessons/:lessonId
Lesson

/profile
Profile

/login
Login

/register
Register

/dashboard
Dashboard

*

404


COURSES

Добавь 6 курсов:

HTML
CSS
Bootstrap
Git & GitHub
JavaScript
React

Каждый курс:

12 уроков
описание
уровень
прогресс


LESSONS

Каждый урок содержит:

Теорию
Пример кода
Практическое задание

Кнопка:

"Завершить урок"


PROGRESS

После завершения урока:

1 / 12
2 / 12
3 / 12

и так далее.

Рассчитай процент:

completed / total * 100


SEARCH

Добавь поиск курсов.


FILTER

Фильтр:

All
Beginner
Intermediate


PROFILE

Покажи:

Имя
Email
Курсы
Уроки
Progress


AUTH

Создай:

Login
Register

На первом этапе можно
использовать localStorage.


LOCAL STORAGE

Сохраняй:

user
completedLessons
progress


API

Создай отдельный service
для API-запросов.

Например:

services/api.js

Не пиши все fetch()
непосредственно внутри
компонентов.


ARCHITECTURE

Раздели приложение
на:

components
pages
hooks
services
utils
assets


RESPONSIVE

Приложение должно
работать:

Desktop
Tablet
Mobile


ФИНАЛЬНАЯ ПРОВЕРКА

Проверь:

✓ Router
✓ Components
✓ Props
✓ State
✓ Forms
✓ Lists
✓ Filter
✓ Search
✓ useEffect
✓ Fetch
✓ API
✓ localStorage
✓ Authentication UI
✓ Progress
✓ Responsive design

Главная цель:

Создать не просто
учебный React-проект,
а небольшую реальную
образовательную платформу.
`,
  },
]