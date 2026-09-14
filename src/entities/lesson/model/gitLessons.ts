import type { Lesson } from "../../course/model/types";

export const gitLessons: Lesson[] = [
  {
    id: 'git-1',
    courseId: 'git',
    order: 1,
    title: 'Что такое Git и GitHub',
    description: 'Система контроля версий и платформа для работы с кодом',
    content: `
# Что такое Git?

Git — это система контроля версий.

Git позволяет разработчику:

- сохранять историю изменений;
- возвращаться к предыдущим версиям;
- создавать отдельные ветки;
- работать над проектом вместе с другими разработчиками;
- видеть, кто и что изменил;
- экспериментировать, не ломая основной код.

Представь, что ты создаёшь сайт.

Сегодня у тебя:

version 1

Завтра ты изменил 20 файлов.

Потом что-то сломалось.

Без Git может быть сложно
вернуться к рабочей версии.

Git сохраняет историю проекта.

# Что такое GitHub?

GitHub — это онлайн-платформа,
где можно хранить Git-репозитории.

Git работает локально
на твоём компьютере.

GitHub работает в интернете.

Пример:

Компьютер
    ↓
   Git
    ↓
GitHub

GitHub используется для:

- хранения проектов;
- командной разработки;
- Pull Request;
- Code Review;
- Issues;
- портфолио разработчика.

# Git ≠ GitHub

Git — инструмент.

GitHub — сервис.

Есть и другие платформы:

GitLab
Bitbucket

Но Git остаётся самой популярной
системой контроля версий.
`,
    task: `
Установи Git на компьютер.

Проверь установку:

git --version

После этого настрой имя:

git config --global user.name "Твоё Имя"

Настрой email:

git config --global user.email "your@email.com"

Проверь настройки:

git config --list

После выполнения команд
убедись, что Git установлен
и имя пользователя настроено.
`,
  },

  {
    id: 'git-2',
    courseId: 'git',
    order: 2,
    title: 'Создание Git-репозитория',
    description: 'git init, git status и структура репозитория',
    content: `
# Git Repository

Repository — это папка,
которая находится под контролем Git.

Создадим проект:

mkdir my-project

Перейдём в него:

cd my-project

Создадим Git repository:

git init

После этого Git создаст
скрытую папку:

.git

В ней хранится история
и служебная информация Git.

# Git status

Проверить состояние проекта:

git status

Git покажет:

- текущую ветку;
- изменённые файлы;
- новые файлы;
- подготовленные файлы.

Например:

Untracked files:
  index.html

Это означает,
что Git пока не отслеживает файл.

# Проверка истории

Позже мы сможем использовать:

git log

для просмотра commits.
`,
    task: `
Создай папку:

git-course

Внутри создай:

index.html
style.css
script.js

Перейди в папку:

cd git-course

Создай Git repository:

git init

Проверь:

git status

Убедись, что Git показывает
новые файлы.

Затем выполни:

git status

и самостоятельно объясни,
что означает каждый найденный файл.
`,
  },

  {
    id: 'git-3',
    courseId: 'git',
    order: 3,
    title: 'Git add и Staging Area',
    description: 'Подготовка файлов к сохранению',
    content: `
# Git add

Git использует несколько состояний.

Рабочая директория:

Ты изменяешь файлы.

Staging Area:

Ты выбираешь изменения,
которые хочешь включить
в следующий commit.

Repository:

Здесь сохраняются commits.

Чтобы добавить один файл:

git add index.html

Добавить несколько:

git add index.html style.css

Добавить все изменения:

git add .

После этого:

git status

Git покажет:

Changes to be committed

Это означает,
что файлы готовы
для создания commit.

# Почему нужен staging?

Представь, что ты изменил
10 файлов.

Но в commit хочешь сохранить
только 3.

Можно добавить только их:

git add file1.js
git add file2.js
git add file3.js
`,
    task: `
В проекте создай:

index.html
style.css
script.js
README.md

Измени все четыре файла.

Затем добавь в staging
только:

index.html
style.css

Используй:

git status

Убедись, что:

index.html
style.css

находятся в Changes to be committed.

Остальные файлы
пока не добавляй.
`,
  },

  {
    id: 'git-4',
    courseId: 'git',
    order: 4,
    title: 'Git commit',
    description: 'Сохранение изменений в истории проекта',
    content: `
# Commit

Commit — это сохранённая
версия изменений.

После:

git add .

можно создать commit:

git commit -m "Initial commit"

Флаг -m позволяет
написать сообщение commit.

Хороший commit:

git commit -m "Add login page"

Плохой commit:

git commit -m "changes"

Сообщение должно объяснять,
что было сделано.

# Git log

Посмотреть историю:

git log

Удобный вариант:

git log --oneline

Например:

a82f31 Add login page
73bd21 Create header
19ac92 Initial commit

Каждый commit имеет
уникальный hash.

# Commit history

Git хранит историю проекта:

Commit 1
   ↓
Commit 2
   ↓
Commit 3
   ↓
Commit 4

Поэтому можно
анализировать изменения
и возвращаться назад.
`,
    task: `
В своём проекте:

1. Добавь все файлы:

git add .

2. Создай первый commit:

git commit -m "Initial project"

3. Добавь новый HTML-код.

4. Создай второй commit:

git commit -m "Add homepage"

5. Добавь CSS.

6. Создай третий commit:

git commit -m "Add page styles"

Посмотри историю:

git log --oneline

У тебя должно быть минимум
3 commit.
`,
  },

  {
    id: 'git-5',
    courseId: 'git',
    order: 5,
    title: 'Git diff и просмотр изменений',
    description: 'Как понять, что именно изменилось',
    content: `
# Git diff

Команда:

git diff

показывает изменения,
которые ещё не добавлены
в staging.

Например:

- удалённые строки;
+ добавленные строки.

Если файл уже добавлен
в staging:

git diff --staged

покажет изменения,
которые попадут в commit.

# Почему это важно?

Перед commit разработчик
должен проверить изменения.

Например, ты хотел изменить
одну строку.

Но случайно изменил
ещё десять.

git diff поможет
обнаружить ошибку.

Полезный workflow:

git status

git diff

git add .

git diff --staged

git commit -m "Update page"
`,
    task: `
Открой свой проект.

Измени минимум 3 строки
в index.html.

Выполни:

git diff

Изучи результат.

Затем:

git add index.html

Выполни:

git diff --staged

После проверки создай commit:

git commit -m "Update homepage"
`,
  },

  {
    id: 'git-6',
    courseId: 'git',
    order: 6,
    title: 'Git branch',
    description: 'Создание и работа с ветками',
    content: `
# Branch

Branch — это отдельная
линия разработки.

Главная ветка обычно:

main

Допустим, проект работает.

Ты хочешь добавить
новую функцию.

Можно создать:

feature/login

Команды:

git branch

Показывает ветки.

Создать:

git branch feature/login

Перейти:

git switch feature/login

Создать и сразу перейти:

git switch -c feature/login

Теперь изменения
будут происходить
в отдельной ветке.

# Почему branches важны?

В команде:

main
│
├── feature/login
├── feature/profile
└── feature/payment

Каждый разработчик
может работать
над своей задачей.
`,
    task: `
Создай новую ветку:

feature/about

Переключись на неё.

Добавь страницу:

about.html

Сделай commit:

git add .

git commit -m "Add about page"

Проверь ветки:

git branch

Убедись, что ты находишься
в feature/about.
`,
  },

  {
    id: 'git-7',
    courseId: 'git',
    order: 7,
    title: 'Git merge',
    description: 'Объединение веток',
    content: `
# Git merge

Представим:

main
│
└── feature/about

Ты закончил работу
над feature/about.

Теперь нужно объединить
изменения с main.

Сначала перейди:

git switch main

Затем:

git merge feature/about

Git объединит историю
двух веток.

# Merge conflict

Иногда Git не может
автоматически объединить
изменения.

Например, два разработчика
изменили одну строку.

Git покажет:

<<<<<<< HEAD

код main

=======

код feature

>>>>>>> feature/about

Разработчик должен
вручную выбрать правильный код.

После исправления:

git add .

git commit

# Важно

Conflict — это не ошибка Git.

Это ситуация,
когда Git просит разработчика
решить конфликт изменений.
`,
    task: `
Создай:

main
feature/test

В feature/test
измени index.html.

Создай commit.

Вернись в main:

git switch main

Объедини:

git merge feature/test

Проверь:

git log --oneline

Убедись, что изменения
из feature/test появились
в main.
`,
  },

  {
    id: 'git-8',
    courseId: 'git',
    order: 8,
    title: 'GitHub и создание Repository',
    description: 'Публикация проекта на GitHub',
    content: `
# GitHub Repository

Теперь отправим локальный
проект в интернет.

Зайди на GitHub.

Создай новый repository.

Например:

my-first-project

После создания GitHub
даст URL репозитория.

Например:

https://github.com/username/my-first-project.git

Свяжем локальный проект
с GitHub:

git remote add origin
https://github.com/username/my-first-project.git

Проверить:

git remote -v

Теперь локальный Git
знает адрес GitHub repository.

# Origin

origin — стандартное имя
для удалённого репозитория.

Проверить:

git remote -v

можно увидеть:

origin
fetch
push
`,
    task: `
Создай новый GitHub repository.

Название:

git-course-project

Не добавляй README
на стороне GitHub,
если README уже существует
локально.

В локальном проекте:

git remote add origin
URL_ТВОЕГО_REPOSITORY

Проверь:

git remote -v

Сделай screenshot
или проверь,
что origin установлен правильно.
`,
  },

  {
    id: 'git-9',
    courseId: 'git',
    order: 9,
    title: 'Git push и pull',
    description: 'Отправка и получение изменений',
    content: `
# Git push

Push отправляет
локальные commits
на GitHub.

Команда:

git push

При первом push
часто используют:

git push -u origin main

После этого можно
использовать:

git push

# Git pull

Pull получает
новые изменения
с GitHub.

Команда:

git pull

Например:

Разработчик A
     ↓
   GitHub
     ↓
Разработчик B

Разработчик B выполняет:

git pull

и получает новые изменения.

# Push vs Pull

push:

Компьютер → GitHub

pull:

GitHub → Компьютер
`,
    task: `
Отправь свой проект
на GitHub.

Выполни:

git add .
git commit -m "Prepare project"

Затем:

git push -u origin main

Открой GitHub
и проверь,
что файлы появились.

После этого измени README.md.

Сделай commit и снова:

git push
`,
  },

  {
    id: 'git-10',
    courseId: 'git',
    order: 10,
    title: 'SSH и GitHub Authentication',
    description: 'Подключение GitHub через SSH',
    content: `
# SSH

SSH позволяет безопасно
подключаться к GitHub
без постоянного ввода
логина и пароля.

Создать SSH key:

ssh-keygen -t ed25519 -C "your@email.com"

После создания будут
файлы:

id_ed25519
id_ed25519.pub

.pub — публичный ключ.

Его можно добавить
в GitHub.

Проверка:

ssh -T git@github.com

Если всё настроено,
GitHub подтвердит
аутентификацию.

# HTTPS vs SSH

HTTPS:

https://github.com/user/repo.git

SSH:

git@github.com:user/repo.git

SSH особенно удобен
для постоянной разработки.
`,
    task: `
Создай SSH key:

ssh-keygen -t ed25519 -C "your@email.com"

Найди публичный ключ:

cat ~/.ssh/id_ed25519.pub

Добавь его в GitHub:

Settings
→ SSH and GPG keys
→ New SSH key

После этого проверь:

ssh -T git@github.com

Затем поменяй remote
с HTTPS на SSH:

git remote set-url origin
git@github.com:USERNAME/REPOSITORY.git

Проверь:

git remote -v
`,
  },

  {
    id: 'git-11',
    courseId: 'git',
    order: 11,
    title: 'Pull Request и Code Review',
    description: 'Командная разработка на GitHub',
    content: `
# Pull Request

Pull Request — предложение
объединить изменения
из одной ветки в другую.

Например:

main
  ↑
Pull Request
  ↑
feature/login

Обычно workflow такой:

1. Получить main
2. Создать feature branch
3. Написать код
4. Commit
5. Push
6. Создать Pull Request
7. Code Review
8. Исправить замечания
9. Merge

# Code Review

Другой разработчик
проверяет код.

Он может обратить внимание
на:

- ошибки;
- архитектуру;
- naming;
- безопасность;
- читаемость;
- дублирование кода.

После проверки
Pull Request можно
объединить с main.

# Issues

GitHub Issues используются
для задач проекта.

Например:

Issue #1
Add login page

Issue #2
Fix navbar

Issue #3
Add responsive design
`,
    task: `
Создай ветку:

feature/contact-page

Создай страницу:

contact.html

Добавь:

- заголовок;
- email;
- телефон;
- форму контактов.

Сделай commit.

Push:

git push -u origin feature/contact-page

Затем на GitHub:

1. Создай Pull Request.
2. Напиши описание.
3. Укажи, что было сделано.
4. Проверь изменения.
5. Выполни Merge.
`,
  },

  {
    id: 'git-12',
    courseId: 'git',
    order: 12,
    title: 'Финальный проект — GitHub-проект',
    description: 'Полный workflow настоящего разработчика',
    content: `
# Финальный проект

Теперь выполним полный
Git workflow.

Представь,
что ты работаешь
над реальным проектом.

Проект:

CodeStart Portfolio

Структура:

index.html
about.html
projects.html
contact.html
style.css
README.md

# Workflow

1. Создай repository.

2. Создай локальный проект.

3. Выполни:

git init

4. Создай README.md.

5. Создай первый commit.

6. Подключи GitHub:

git remote add origin ...

7. Создай main.

8. Создай feature branch.

Например:

feature/home-page

9. Напиши код.

10. Commit.

11. Push.

12. Создай Pull Request.

13. Проведи Code Review.

14. Merge в main.

15. Создай новую feature branch.

Повтори workflow
для следующих страниц.

# README

README должен содержать:

Название проекта

Описание

Технологии

Как запустить проект

Структуру проекта

Автор

GitHub repository

# Git workflow

Working Directory
       ↓
    git add
       ↓
Staging Area
       ↓
   git commit
       ↓
Local Repository
       ↓
    git push
       ↓
     GitHub
       ↓
Pull Request
       ↓
Code Review
       ↓
    Merge
       ↓
     main
`,
    task: `
Создай полноценный GitHub-проект:

CodeStart Portfolio.

Создай:

index.html
about.html
projects.html
contact.html
style.css
README.md

Требования:

1. Используй Git.

2. Создай минимум 8 commits.

3. Создай минимум 3 branches:

feature/home
feature/projects
feature/contact

4. Для каждой feature
создай Pull Request.

5. Выполни merge
в main.

6. Используй GitHub Issues.

Создай минимум 3 Issues:

- Create homepage
- Add projects
- Add contact form

7. README должен содержать:

Название проекта
Описание
Технологии
Инструкцию запуска
Автор

8. Финальный проект
должен быть опубликован
на GitHub.

Главная цель:

научиться работать
с Git и GitHub так,
как работает настоящий
Frontend Developer.
`,
  },
]