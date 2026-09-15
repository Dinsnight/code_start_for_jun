import type { Lesson } from "../../course/model/types";

export const javascriptLessons: Lesson[] = [
  {
    id: 'js-1',
    courseId: 'javascript',
    order: 1,
    title: 'Введение в JavaScript',
    description: 'Что такое JavaScript и где он используется',

    content: `
# Введение в JavaScript

JavaScript позволяет делать веб-страницы интерактивными.

Первый код:

console.log("Hello, JavaScript!");
`,

    task: `
Создай файл script.js.

Выведи в консоль:

Hello, JavaScript!

Затем выведи своё имя и возраст.
`,
videoUrl: "https://youtu.be/fHl7UyRjOf0?si=CMZVga_EoBliKUnK"
  },

  {
    id: 'js-2',
    courseId: 'javascript',
    order: 2,
    title: 'Переменные',
    description: 'let и const',

    content: `
# Переменные

Переменные используются для хранения данных.

const name = "Ali";
let age = 20;
`,

    task: `
Создай две переменные:

name — твоё имя
age — твой возраст

Выведи обе переменные через console.log().
`,
  },

  {
    id: 'js-3',
    courseId: 'javascript',
    order: 3,
    title: 'Типы данных',
    description: 'String, Number, Boolean и другие типы',

    content: `
# Типы данных

Основные типы:

String
Number
Boolean
Null
Undefined
Object
Array
`,

    task: `
Создай переменные:

name
age
isStudent

Используй соответственно String, Number и Boolean.

Выведи их в консоль.
`,
  },

  {
    id: 'js-4',
    courseId: 'javascript',
    order: 4,
    title: 'Операторы',
    description: 'Арифметические и логические операторы',

    content: `
# Операторы

JavaScript поддерживает:

+
-
*
/
%

Пример:

const a = 10;
const b = 5;

console.log(a + b);
`,

    task: `
Создай две переменные:

a = 20
b = 5

Посчитай:

сложение
вычитание
умножение
деление
остаток от деления
`,
  },

  {
    id: 'js-5',
    courseId: 'javascript',
    order: 5,
    title: 'Условия',
    description: 'if, else и else if',

    content: `
# Условия

Условия позволяют программе принимать решения.

const age = 18;

if (age >= 18) {
  console.log("Можно войти");
} else {
  console.log("Вход запрещён");
}
`,

    task: `
Создай переменную age.

Если пользователю 18 или больше,
выведи:

"Доступ разрешён"

Иначе:

"Доступ запрещён"
`,
  },

  {
    id: 'js-6',
    courseId: 'javascript',
    order: 6,
    title: 'Циклы',
    description: 'for и while',

    content: `
# Циклы

Циклы позволяют повторять код.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
`,

    task: `
Создай цикл for.

Выведи числа от 1 до 10.

Затем создай второй цикл,
который выводит только чётные числа.
`,
  },

  {
    id: 'js-7',
    courseId: 'javascript',
    order: 7,
    title: 'Функции',
    description: 'Создание функций',

    content: `
# Функции

Функция — это переиспользуемый блок кода.

function greet(name) {
  console.log("Hello " + name);
}

greet("Ali");
`,

    task: `
Создай функцию calculateAge.

Функция должна принимать год рождения
и возвращать примерный возраст человека.

Вызови функцию и выведи результат.
`,
  },

  {
    id: 'js-8',
    courseId: 'javascript',
    order: 8,
    title: 'Массивы',
    description: 'Работа с массивами',

    content: `
# Массивы

const fruits = [
  "Apple",
  "Banana",
  "Orange"
];

console.log(fruits[0]);
`,

    task: `
Создай массив с пятью любимыми продуктами.

Выведи:

первый элемент;
последний элемент;
количество элементов.

Затем добавь ещё один элемент через push().
`,
  },

  {
    id: 'js-9',
    courseId: 'javascript',
    order: 9,
    title: 'Объекты',
    description: 'Работа с объектами',

    content: `
# Объекты

const user = {
  name: "Ali",
  age: 20,
  isStudent: true
};

console.log(user.name);
`,

    task: `
Создай объект student.

Добавь:

name
age
course
isStudent

Выведи каждое значение в консоль.
`,
  },

  {
    id: 'js-10',
    courseId: 'javascript',
    order: 10,
    title: 'DOM',
    description: 'JavaScript и HTML',

    content: `
# DOM

JavaScript может изменять HTML.

const title = document.querySelector("#title");

title.textContent = "Hello JavaScript!";
`,

    task: `
Создай HTML:

<h1 id="title">Hello</h1>

С помощью JavaScript
измени текст на:

"Я изучаю JavaScript!"
`,
  },

  {
    id: 'js-11',
    courseId: 'javascript',
    order: 11,
    title: 'События',
    description: 'Работа с событиями',

    content: `
# События

JavaScript может реагировать
на действия пользователя.

button.addEventListener("click", () => {
  alert("Кнопка нажата!");
});
`,

    task: `
Создай кнопку.

При нажатии на кнопку
должно появиться сообщение:

"Я изучаю JavaScript!"
`,
  },

  {
    id: 'js-12',
    courseId: 'javascript',
    order: 12,
    title: 'Fetch API',
    description: 'Получение данных с сервера',

    content: `
# Fetch API

Fetch позволяет получать данные
с сервера.

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
`,

    task: `
Используй Fetch API.

Получи пользователей:

https://jsonplaceholder.typicode.com/users

Выведи в консоль
имена всех пользователей.
`,
  },
]