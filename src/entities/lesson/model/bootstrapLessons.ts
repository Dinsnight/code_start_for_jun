import type { Lesson } from "../../course/model/types";

export const bootstrapLessons: Lesson[] = [
  {
    id: 'bootstrap-1',
    courseId: 'bootstrap',
    order: 1,
    title: 'Введение в Bootstrap',
    description: 'Что такое Bootstrap и зачем он нужен',
    content: `
# Введение в Bootstrap

Bootstrap — популярный CSS-фреймворк
для создания современных и адаптивных сайтов.

Он предоставляет готовые:

- кнопки;
- карточки;
- формы;
- navbar;
- grid;
- alerts;
- модальные окна;
- таблицы;
- badges;
- контейнеры;
- utility-классы.

Чтобы использовать Bootstrap через CDN,
добавь в HTML:

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
>

Теперь можно использовать
готовые Bootstrap-классы.

Например:

<button class="btn btn-primary">
  Нажми меня
</button>
`,
    task: `
Создай index.html.

Подключи Bootstrap через CDN.

Создай:

<h1>CodeStart Academy</h1>

И три кнопки:

Primary
Success
Danger

Используй Bootstrap-классы:

btn
btn-primary
btn-success
btn-danger

Попробуй также:

btn-lg
btn-sm
`,
  },

  {
    id: 'bootstrap-2',
    courseId: 'bootstrap',
    order: 2,
    title: 'Container и Grid',
    description: 'Создание структуры страницы',
    content: `
# Bootstrap Grid

Bootstrap использует систему
из 12 колонок.

Основные классы:

.container
.container-fluid
.row
.col

Пример:

<div class="container">
  <div class="row">
    <div class="col">
      Column 1
    </div>

    <div class="col">
      Column 2
    </div>
  </div>
</div>

Можно задавать размеры:

.col-6

означает 6 из 12 колонок.

Также:

.col-md-6
.col-lg-4

Позволяют создавать
адаптивные layouts.
`,
    task: `
Создай страницу с Bootstrap Grid.

Сделай 3 карточки:

HTML
CSS
JavaScript

На компьютере:

3 колонки.

На планшете:

2 колонки.

На телефоне:

1 колонка.

Используй:

container
row
col-md-6
col-lg-4
`,
  },

  {
    id: 'bootstrap-3',
    courseId: 'bootstrap',
    order: 3,
    title: 'Typography и цвета',
    description: 'Работа с текстом и цветами',
    content: `
# Typography

Bootstrap предоставляет
готовые классы для текста.

Например:

<h1 class="display-1">
  Hello
</h1>

<p class="lead">
  Большой текст
</p>

Для цветов:

text-primary
text-success
text-danger
text-warning
text-muted

Для фона:

bg-primary
bg-success
bg-dark
bg-light

Можно комбинировать классы:

<p class="text-primary fw-bold">
  Frontend Developer
</p>
`,
    task: `
Создай информационный блок.

Добавь:

<h1>
  CodeStart Academy
</h1>

<p>
  Изучай программирование.
</p>

Используй:

display-4
lead
text-primary
fw-bold
text-muted

Создай также блок
с bg-dark и text-white.
`,
  },

  {
    id: 'bootstrap-4',
    courseId: 'bootstrap',
    order: 4,
    title: 'Кнопки и Badges',
    description: 'Создание кнопок и небольших меток',
    content: `
# Buttons

Bootstrap имеет готовые кнопки:

btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-dark
btn-light

Размеры:

btn-sm
btn-lg

Outline:

btn-outline-primary

# Badges

Badge используется
для небольших меток.

Пример:

<span class="badge bg-success">
  Beginner
</span>

Можно использовать
badge внутри карточек.
`,
    task: `
Создай карточку курса.

Название:

JavaScript

Добавь badge:

Beginner

Добавь две кнопки:

Начать курс
Подробнее

Используй:

btn-primary
btn-outline-primary

Сделай кнопку "Начать курс"
большой.
`,
  },

  {
    id: 'bootstrap-5',
    courseId: 'bootstrap',
    order: 5,
    title: 'Cards',
    description: 'Создание красивых карточек',
    content: `
# Bootstrap Cards

Card — один из самых
используемых компонентов Bootstrap.

Пример:

<div class="card">
  <img src="image.jpg"
       class="card-img-top">

  <div class="card-body">
    <h5 class="card-title">
      JavaScript
    </h5>

    <p class="card-text">
      Изучение JavaScript
    </p>

    <a href="#"
       class="btn btn-primary">
      Начать
    </a>
  </div>
</div>

Полезные классы:

card
card-body
card-title
card-text
card-img-top
`,
    task: `
Создай 6 карточек курсов:

HTML
CSS
Bootstrap
Git
JavaScript
React

Каждая карточка должна иметь:

- название;
- описание;
- изображение;
- badge;
- кнопку "Начать".

Используй Bootstrap Grid,
чтобы карточки были адаптивными.
`,
  },

  {
    id: 'bootstrap-6',
    courseId: 'bootstrap',
    order: 6,
    title: 'Navbar',
    description: 'Создание адаптивной навигации',
    content: `
# Navbar

Navbar используется
для создания меню сайта.

Пример:

<nav class="navbar navbar-expand-lg">
  <div class="container">

    <a class="navbar-brand"
       href="#">
      CodeStart
    </a>

    <button
      class="navbar-toggler"
      type="button">
      Menu
    </button>

  </div>
</nav>

Полезные классы:

navbar
navbar-brand
navbar-nav
nav-item
nav-link
navbar-toggler
navbar-expand-lg

Bootstrap позволяет
создавать адаптивное меню.
`,
    task: `
Создай navbar для CodeStart Academy.

Добавь:

Logo

Главная
Курсы
О нас
Контакты

Справа добавь:

Войти
Регистрация

Используй Bootstrap Navbar.
`,
  },

  {
    id: 'bootstrap-7',
    courseId: 'bootstrap',
    order: 7,
    title: 'Forms',
    description: 'Создание форм регистрации и обратной связи',
    content: `
# Bootstrap Forms

Bootstrap предоставляет
готовые классы для форм.

Пример:

<label class="form-label">
  Email
</label>

<input
  type="email"
  class="form-control"
  placeholder="Email"
>

Для select:

<select class="form-select">
  <option>JavaScript</option>
  <option>React</option>
</select>

Для checkbox:

<div class="form-check">
  <input
    class="form-check-input"
    type="checkbox"
  >

  <label class="form-check-label">
    Я согласен
  </label>
</div>
`,
    task: `
Создай форму регистрации.

Поля:

Имя
Email
Пароль
Выбор курса

Добавь checkbox:

"Я принимаю условия"

Добавь кнопку:

"Зарегистрироваться"

Используй Bootstrap Forms.
`,
  },

  {
    id: 'bootstrap-8',
    courseId: 'bootstrap',
    order: 8,
    title: 'Alerts, Progress и Spinners',
    description: 'Информационные сообщения и индикаторы',
    content: `
# Alerts

Alert используется
для отображения сообщений.

<div class="alert alert-success">
  Регистрация успешна!
</div>

Другие варианты:

alert-primary
alert-danger
alert-warning
alert-info

# Progress

Progress показывает прогресс:

<div class="progress">
  <div
    class="progress-bar"
    style="width: 70%">
    70%
  </div>
</div>

# Spinner

Spinner показывает
процесс загрузки:

<div class="spinner-border">
</div>
`,
    task: `
Создай страницу
"Мой прогресс".

Добавь:

Alert:

"Поздравляем! Ты завершил урок."

Progress:

HTML — 100%
CSS — 75%
JavaScript — 40%

Добавь spinner
с текстом "Загрузка...".
`,
  },

  {
    id: 'bootstrap-9',
    courseId: 'bootstrap',
    order: 9,
    title: 'Modal и Accordion',
    description: 'Интерактивные компоненты Bootstrap',
    content: `
# Modal

Modal — всплывающее окно.

Bootstrap позволяет
создавать готовые модальные окна
с помощью data-атрибутов.

Кнопка:

<button
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal">
  Открыть
</button>

Modal можно использовать
для:

- регистрации;
- подтверждения;
- информации;
- авторизации.

# Accordion

Accordion используется
для раскрывающихся блоков.

Он отлично подходит
для FAQ.
`,
    task: `
Создай FAQ страницу.

Добавь минимум 5 вопросов:

Что такое HTML?
Что такое CSS?
Что такое JavaScript?
Что такое Bootstrap?
Что такое React?

Используй Accordion.

Также создай кнопку:

"Записаться на курс"

При нажатии открывается Modal
с формой регистрации.
`,
  },

  {
    id: 'bootstrap-10',
    courseId: 'bootstrap',
    order: 10,
    title: 'Utilities и адаптивность',
    description: 'Spacing, display, flex и responsive классы',
    content: `
# Bootstrap Utilities

Bootstrap содержит
много utility-классов.

Margin:

m-1
m-2
m-3
mt-3
mb-4
mx-auto

Padding:

p-1
p-3
px-4
py-5

Display:

d-none
d-block
d-flex

Flex:

justify-content-center
justify-content-between
align-items-center

Responsive:

d-md-flex
d-lg-block

Эти классы позволяют
быстро создавать layout
без написания большого
количества CSS.
`,
    task: `
Создай блок Hero.

Используй только Bootstrap
для основной стилизации.

В блоке:

Заголовок
Описание
Две кнопки

Используй:

py-5
my-5
d-flex
justify-content-center
align-items-center
gap-3
text-center

Сделай Hero адаптивным.
`,
  },

  {
    id: 'bootstrap-11',
    courseId: 'bootstrap',
    order: 11,
    title: 'Carousel и Dashboard',
    description: 'Сложные интерфейсы Bootstrap',
    content: `
# Carousel

Carousel позволяет
создавать слайдеры.

Его можно использовать
для:

- изображений;
- баннеров;
- отзывов;
- презентаций.

Bootstrap также позволяет
быстро создавать Dashboard.

Dashboard обычно состоит из:

Navbar
Sidebar
Cards
Tables
Charts
Buttons

Bootstrap Grid отлично подходит
для создания Dashboard.
`,
    task: `
Создай Dashboard
образовательной платформы.

Добавь:

Navbar

Sidebar:

Главная
Мои курсы
Прогресс
Профиль

Основная область:

Всего курсов — 6
Завершено — 3
Прогресс — 65%

Создай минимум 4 карточки
со статистикой.

Ниже добавь таблицу
последних уроков.
`,
  },

  {
    id: 'bootstrap-12',
    courseId: 'bootstrap',
    order: 12,
    title: 'Финальный проект — Bootstrap Landing Page',
    description: 'Создание полноценного сайта с Bootstrap',
    content: `
# Финальный проект

Теперь объединим знания
всего курса.

Создай полноценный
landing page онлайн-школы
CodeStart Academy.

Используй Bootstrap
как основной инструмент
стилизации.

На странице должны быть:

Navbar
Hero
Courses
Features
About
Testimonials
FAQ
Contact
Footer

Используй:

Grid
Cards
Buttons
Badges
Forms
Alerts
Modal
Accordion
Utilities
Responsive classes

Страница должна
корректно работать
на телефоне и компьютере.
`,
    task: `
Создай полноценный
Bootstrap-сайт:

CODESTART ACADEMY

1. Navbar

Логотип:
CodeStart

Меню:

Главная
Курсы
О нас
Контакты

Кнопки:

Войти
Регистрация


2. Hero

Заголовок:

"Учись программировать
с нуля"

Описание.

Кнопка:

"Начать обучение"


3. Курсы

Создай 6 карточек:

HTML
CSS
Bootstrap
Git & GitHub
JavaScript
React

У каждой:

изображение;
название;
описание;
badge;
кнопка.


4. Преимущества

Минимум 4 блока:

Практика
Проекты
Тесты
Сертификаты


5. Отзывы

Создай минимум 3 карточки
с отзывами студентов.


6. FAQ

Используй Accordion.


7. Регистрация

Создай форму
с Bootstrap Forms.


8. Modal

Кнопка регистрации
должна открывать Modal.


9. Footer

Добавь:

CodeStart Academy
2026
Ссылки на социальные сети.


Требования:

- Bootstrap 5;
- Grid;
- Cards;
- Navbar;
- Forms;
- Modal;
- Accordion;
- Buttons;
- Badges;
- Utilities;
- responsive design;
- минимум 6 карточек;
- аккуратный современный дизайн.
`,
  },
]