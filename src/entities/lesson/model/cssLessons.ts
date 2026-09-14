import type { Lesson } from "../../course/model/types";

export const cssLessons: Lesson[] = [
  {
    id: 'css-1',
    courseId: 'css',
    order: 1,
    title: 'Введение в CSS',
    description: 'Что такое CSS и зачем он нужен',
    content: `
# Введение в CSS

CSS — Cascading Style Sheets.

CSS используется для оформления HTML-страниц.

С помощью CSS можно изменить:

- цвет текста;
- размер текста;
- шрифт;
- фон;
- отступы;
- границы;
- размеры элементов;
- расположение элементов;
- адаптивность сайта.

HTML отвечает за структуру.

CSS отвечает за внешний вид.

Пример:

<h1 class="title">Hello CSS</h1>

.title {
  color: blue;
  font-size: 40px;
}

CSS состоит из:

селектор {
  свойство: значение;
}

Например:

p {
  color: red;
}

p — селектор.

color — свойство.

red — значение.
`,
    task: `
Создай index.html и style.css.

В HTML добавь:

<h1>Мой первый CSS сайт</h1>
<p>Я изучаю CSS.</p>

Подключи style.css.

Для h1:

- сделай текст синим;
- размер 40px.

Для p:

- сделай текст серым;
- размер 20px.
`,
  },

  {
    id: 'css-2',
    courseId: 'css',
    order: 2,
    title: 'Подключение CSS',
    description: 'Inline, Internal и External CSS',
    content: `
# Способы подключения CSS

Есть три основных способа.

1. Inline CSS

Стиль пишется прямо внутри HTML:

<h1 style="color: red;">
  Hello
</h1>

2. Internal CSS

CSS находится внутри <style>:

<style>
  h1 {
    color: red;
  }
</style>

3. External CSS

CSS находится в отдельном файле:

<link rel="stylesheet" href="style.css">

Это самый удобный способ
для больших проектов.

Рекомендуется использовать External CSS.
`,
    task: `
Создай HTML и CSS файл.

Подключи:

style.css

Создай:

<h1>CodeStart Academy</h1>

В CSS:

- цвет текста — purple;
- размер — 45px;
- выравнивание — center.
`,
  },

  {
    id: 'css-3',
    courseId: 'css',
    order: 3,
    title: 'Цвета и фон',
    description: 'color, background, HEX, RGB и градиенты',
    content: `
# Цвета и фон

Для изменения цвета текста
используется свойство color.

h1 {
  color: red;
}

Цвет можно задавать разными способами.

Название:

color: red;

HEX:

color: #ff0000;

RGB:

color: rgb(255, 0, 0);

Для фона используется:

background-color: #222;

Можно использовать градиент:

background: linear-gradient(
  90deg,
  #635bff,
  #8b5cf6
);

CSS позволяет создавать
красивые современные интерфейсы
без изображений.
`,
    task: `
Создай карточку профиля.

Добавь:

<h2>Alex Developer</h2>
<p>Frontend Developer</p>

Для карточки:

- background-color;
- цвет текста;
- красивый градиент;
- padding.

Попробуй использовать HEX-цвета.
`,
  },

  {
    id: 'css-4',
    courseId: 'css',
    order: 4,
    title: 'Шрифты и текст',
    description: 'font-size, font-family, font-weight и text-align',
    content: `
# Работа с текстом

Основные свойства:

font-size
font-family
font-weight
font-style
line-height
text-align
text-decoration
letter-spacing

Пример:

.title {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
}

Абзац:

.description {
  font-size: 18px;
  line-height: 1.6;
}

Можно изменить расстояние
между буквами:

.title {
  letter-spacing: 2px;
}
`,
    task: `
Создай блок:

<h1>Frontend Developer</h1>
<p>Я создаю современные сайты.</p>

Для h1:

- размер 48px;
- жирность 700;
- выравнивание center;
- letter-spacing 2px.

Для p:

- размер 18px;
- line-height 1.6;
- цвет #666.
`,
  },

  {
    id: 'css-5',
    courseId: 'css',
    order: 5,
    title: 'Box Model',
    description: 'margin, padding, border и box-sizing',
    content: `
# CSS Box Model

Каждый HTML-элемент можно представить
как коробку.

Box Model состоит из:

Content
Padding
Border
Margin

Content — содержимое.

Padding — внутренний отступ.

Border — граница.

Margin — внешний отступ.

Пример:

.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 30px;
}

Очень полезное свойство:

* {
  box-sizing: border-box;
}

Оно делает работу
с размерами элементов удобнее.
`,
    task: `
Создай карточку товара.

Размер:

width: 300px

Добавь:

padding: 20px
border: 1px solid
margin: 20px

Используй:

box-sizing: border-box;

Внутри размести название,
описание и цену товара.
`,
  },

  {
    id: 'css-6',
    courseId: 'css',
    order: 6,
    title: 'Display и позиционирование',
    description: 'block, inline, inline-block, position',
    content: `
# Display

Основные значения:

display: block;
display: inline;
display: inline-block;
display: none;

Block занимает всю доступную ширину.

Inline занимает только необходимое место.

Inline-block позволяет
задавать размеры inline-элементу.

# Position

CSS имеет несколько типов
позиционирования:

static
relative
absolute
fixed
sticky

Пример:

.box {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
`,
    task: `
Создай карточку.

Внутри карточки
создай маленький badge:

"NEW"

Карточка должна иметь:

position: relative;

Badge:

position: absolute;

Размести badge
в правом верхнем углу.
`,
  },

  {
    id: 'css-7',
    courseId: 'css',
    order: 7,
    title: 'Flexbox',
    description: 'Создание современных layouts с Flexbox',
    content: `
# Flexbox

Flexbox используется
для расположения элементов.

Пример:

.container {
  display: flex;
}

Основные свойства:

display: flex;
flex-direction;
justify-content;
align-items;
gap;
flex-wrap;

Например:

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

justify-content управляет
расположением по главной оси.

align-items управляет
выравниванием по другой оси.

gap задаёт расстояние
между элементами.
`,
    task: `
Создай navigation bar.

Добавь:

Logo
Home
Courses
About
Contact

Используй:

display: flex;
align-items: center;
justify-content: space-between;
gap.

Navigation должна выглядеть
как современное меню.
`,
  },

  {
    id: 'css-8',
    courseId: 'css',
    order: 8,
    title: 'CSS Grid',
    description: 'Создание сеток с помощью Grid',
    content: `
# CSS Grid

Grid используется
для создания сложных сеток.

Пример:

.grid {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}

repeat(3, 1fr)
создаёт три одинаковые колонки.

Можно использовать:

grid-template-columns
grid-template-rows
gap
grid-column
grid-row

Grid отлично подходит
для карточек товаров,
галерей и dashboard.
`,
    task: `
Создай grid из 6 карточек.

Используй:

display: grid;

На большом экране
должно быть 3 колонки.

Между карточками:

gap: 20px;

На каждой карточке
покажи название товара
и цену.
`,
  },

  {
    id: 'css-9',
    courseId: 'css',
    order: 9,
    title: 'Псевдоклассы и hover',
    description: 'hover, focus, active и transition',
    content: `
# Псевдоклассы

CSS позволяет менять
стили элемента при действиях пользователя.

Например:

button:hover {
  background: black;
}

При наведении мыши
цвет изменится.

Также есть:

:hover
:focus
:active
:checked
:first-child
:last-child

Для плавной анимации:

button {
  transition: 0.3s;
}

button:hover {
  transform: translateY(-3px);
}
`,
    task: `
Создай красивую кнопку:

"Начать обучение"

Добавь:

- background;
- color;
- border-radius;
- padding;
- transition.

При наведении:

- измени background;
- немного подними кнопку;
- добавь box-shadow.
`,
  },

  {
    id: 'css-10',
    courseId: 'css',
    order: 10,
    title: 'Адаптивный дизайн',
    description: 'Media Queries и responsive design',
    content: `
# Адаптивный дизайн

Сайт должен хорошо выглядеть
на компьютере, планшете и телефоне.

Для этого используются
Media Queries.

Пример:

.container {
  width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 20px;
  }
}

Можно менять layout:

.desktop {
  display: flex;
}

@media (max-width: 600px) {
  .desktop {
    flex-direction: column;
  }
}

Responsive design —
это обязательная часть
современной frontend-разработки.
`,
    task: `
Возьми grid из прошлого урока.

На компьютере:

3 колонки.

На планшете:

2 колонки.

На телефоне:

1 колонка.

Используй Media Queries.
`,
  },

  {
    id: 'css-11',
    courseId: 'css',
    order: 11,
    title: 'CSS-анимации и эффекты',
    description: 'Transform, transition и keyframes',
    content: `
# CSS-анимации

CSS позволяет создавать
простые анимации.

Transform:

transform: scale(1.1);

transform: translateY(-5px);

transform: rotate(10deg);

Transition:

.card {
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

Можно создавать
полноценные keyframes:

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 1s;
}
`,
    task: `
Создай карточку курса.

При наведении мыши:

- карточка должна немного
  подниматься;
- должна увеличиваться;
- должна появляться тень.

Используй:

transform
transition
box-shadow
:hover
`,
  },

  {
    id: 'css-12',
    courseId: 'css',
    order: 12,
    title: 'Финальный проект — современный сайт',
    description: 'Создание полноценного адаптивного сайта',
    content: `
# Финальный проект

Теперь объединим
все знания CSS.

Создай современный
адаптивный landing page.

Структура:

Header
Hero
Features
Courses
About
Contact
Footer

Используй:

Flexbox
Grid
Box Model
Colors
Typography
Position
Hover
Transitions
Media Queries

Сайт должен выглядеть
современно и аккуратно.

Главная задача —
не просто написать CSS,
а научиться строить
полноценный интерфейс.
`,
    task: `
Создай полноценный сайт
для онлайн-школы программирования.

Название:

CodeStart Academy

Сайт должен содержать:

1. Header
2. Navigation
3. Hero section
4. Блок "Наши курсы"
5. Минимум 6 карточек курсов
6. Блок преимуществ
7. About section
8. Contact section
9. Footer

Требования:

- Flexbox;
- CSS Grid;
- адаптивность;
- Media Queries;
- красивые цвета;
- типографика;
- hover-эффекты;
- transition;
- border-radius;
- box-shadow;
- правильные отступы;
- mobile version.

На телефоне сайт должен
оставаться удобным для просмотра.

Постарайся сделать дизайн
как настоящий коммерческий сайт.
`,
  },
]