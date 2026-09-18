import type { Lesson } from "../../course/model/types";

export const htmlLessons: Lesson[] = [
  {
    id: 'html-1',
    courseId: 'html',
    order: 1,
    title: 'Введение в HTML Ziyoda and Aziza',
    description: 'Что такое HTML и как устроена веб-страница',
    content: `
# Введение в HTML

HTML — это язык разметки веб-страниц.

С помощью HTML мы создаём структуру сайта.

Пример:

<!DOCTYPE html>
<html>
  <head>
    <title>Мой сайт</title>
  </head>

  <body>
    <h1>Hello HTML!</h1>
  </body>
</html>
`,
    task: `
Создай файл index.html.

Создай простую HTML-страницу.

Внутри страницы добавь:

<h1>Мой первый сайт</h1>

И открой файл в браузере.
`,
  },

  {
    id: 'html-2',
    courseId: 'html',
    order: 2,
    title: 'Структура HTML-документа ZARINA',
    description: 'DOCTYPE, html, head и body',
    content: `
# Структура HTML

Каждый HTML-документ имеет основную структуру:

<!DOCTYPE html>

<html>
  <head>
    <title>Название страницы</title>
  </head>

  <body>
    Контент страницы
  </body>
</html>

head содержит служебную информацию.

body содержит то, что видит пользователь.
`,
    task: `
Создай HTML-документ.

Добавь:

title — "Моя страница"

В body добавь:

<h1>Добро пожаловать!</h1>

<p>Это моя первая веб-страница.</p>
`,
  },

  {
    id: 'html-3',
    courseId: 'html',
    order: 3,
    title: 'Заголовки и текст',
    description: 'h1–h6, p, strong и em',
    content: `
# Заголовки и текст

HTML имеет шесть уровней заголовков:

<h1>Главный заголовок</h1>
<h2>Заголовок второго уровня</h2>
<h3>Заголовок третьего уровня</h3>

Для обычного текста используется:

<p>Это текст.</p>

Для выделения:

<strong>Важный текст</strong>

<em>Курсивный текст</em>
`,
    task: `
Создай страницу о себе.

Добавь:

<h1>Обо мне</h1>

<h2>Мои интересы</h2>

<p>Напиши небольшой рассказ о себе.</p>

Используй <strong> и <em>.
`,
  },

  {
    id: 'html-4',
    courseId: 'html',
    order: 4,
    title: 'Ссылки',
    description: 'Создание ссылок с помощью тега a',
    content: `
# Ссылки

Для создания ссылок используется тег <a>.

Пример:

<a href="https://google.com">
  Google
</a>

Можно открыть ссылку в новой вкладке:

<a
  href="https://google.com"
  target="_blank"
>
  Google
</a>
`,
    task: `
Создай страницу "Мои сайты".

Добавь ссылки на:

Google
YouTube
GitHub

Каждая ссылка должна открываться
в новой вкладке.
`,
  },

  {
    id: 'html-5',
    courseId: 'html',
    order: 5,
    title: 'Изображения',
    description: 'Добавление изображений на страницу',
    content: `
# Изображения

Для изображения используется тег <img>.

Пример:

<img
  src="image.jpg"
  alt="Описание изображения"
/>

src — путь к изображению.

alt — описание изображения.
`,
    task: `
Создай страницу "Мои любимые места".

Добавь минимум 3 изображения.

Для каждого изображения обязательно укажи:

src
alt

Под каждым изображением добавь небольшой текст.
`,
  },

  {
    id: 'html-6',
    courseId: 'html',
    order: 6,
    title: 'Списки',
    description: 'Маркированные и нумерованные списки',
    content: `
# Списки

Маркированный список:

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

Нумерованный список:

<ol>
  <li>Первый шаг</li>
  <li>Второй шаг</li>
  <li>Третий шаг</li>
</ol>
`,
    task: `
Создай страницу "Мои навыки".

Создай маркированный список
из 5 навыков.

Затем создай нумерованный список
из 5 шагов изучения программирования.
`,
  },

  {
    id: 'html-7',
    courseId: 'html',
    order: 7,
    title: 'Таблицы',
    description: 'Создание таблиц в HTML',
    content: `
# Таблицы

Для таблицы используется:

<table>

Строка:

<tr>

Ячейка заголовка:

<th>

Обычная ячейка:

<td>

Пример:

<table>
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
  </tr>

  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>
</table>
`,
    task: `
Создай таблицу студентов.

Добавь столбцы:

Имя
Возраст
Класс
Оценка

Добавь минимум 5 студентов.
`,
  },

  {
    id: 'html-8',
    courseId: 'html',
    order: 8,
    title: 'Формы',
    description: 'Создание форм и полей ввода',
    content: `
# HTML-формы

Формы используются для
получения информации от пользователя.

Пример:

<form>
  <input type="text">
  <input type="email">
  <input type="password">

  <button type="submit">
    Отправить
  </button>
</form>
`,
    task: `
Создай форму регистрации.

Добавь поля:

Имя
Email
Пароль
Возраст

Добавь кнопку:

"Зарегистрироваться"
`,
  },

  {
    id: 'html-9',
    courseId: 'html',
    order: 9,
    title: 'Семантические теги',
    description: 'header, nav, main, section, article и footer',
    content: `
# Семантический HTML

Семантические теги помогают
понять структуру страницы.

<header>
  Шапка сайта
</header>

<nav>
  Навигация
</nav>

<main>
  Основной контент
</main>

<section>
  Раздел
</section>

<article>
  Статья
</article>

<footer>
  Подвал
</footer>
`,
    task: `
Создай структуру сайта:

<header>
<nav>
<main>
<section>
<article>
<footer>

В header добавь название сайта.

В nav добавь 3 ссылки.

В footer добавь информацию
об авторе.
`,
  },

  {
    id: 'html-10',
    courseId: 'html',
    order: 10,
    title: 'Audio и Video',
    description: 'Добавление мультимедиа на сайт',
    content: `
# Audio и Video

HTML позволяет добавлять видео:

<video controls>
  <source src="video.mp4">
</video>

Аудио:

<audio controls>
  <source src="music.mp3">
</audio>

Атрибут controls
добавляет элементы управления.
`,
    task: `
Создай страницу "Медиа".

Добавь:

1 видео
1 аудиофайл

Используй атрибут controls.

Также добавь заголовки
для каждого элемента.
`,
  },

  {
    id: 'html-11',
    courseId: 'html',
    order: 11,
    title: 'HTML5 и полезные атрибуты',
    description: 'Основные атрибуты HTML5',
    content: `
# HTML5

HTML5 добавил много полезных возможностей.

Например:

placeholder
required
disabled
checked
selected

Пример:

<input
  type="text"
  placeholder="Введите имя"
  required
>

required означает,
что поле обязательно для заполнения.
`,
    task: `
Создай форму обратной связи.

Добавь:

Имя
Email
Сообщение

Для всех полей используй required.

Для поля сообщения
добавь placeholder.

Добавь кнопку "Отправить".
`,
  },

  {
    id: 'html-12',
    courseId: 'html',
    order: 12,
    title: 'Финальный проект — сайт-портфолио',
    description: 'Создаём полноценную HTML-страницу',
    content: `
# Финальный проект

Теперь объединим всё,
что изучили в курсе HTML.

Создадим сайт-портфолио.

Страница должна содержать:

Header
Navigation
About
Skills
Projects
Contact
Footer

Используй семантические HTML-теги.

Добавь изображения,
ссылки, список и форму.
`,
    task: `
Создай полноценный сайт-портфолио.

Структура:

1. Header
2. Navigation
3. About Me
4. My Skills
5. My Projects
6. Contact
7. Footer

Требования:

- минимум 3 изображения;
- минимум 3 ссылки;
- список навыков;
- таблица проектов;
- форма контактов;
- semantic HTML;
- аккуратная структура HTML.

После завершения открой сайт
в браузере и проверь его.
`,
  },
]