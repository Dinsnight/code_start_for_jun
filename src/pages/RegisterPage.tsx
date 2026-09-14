import { Link } from 'react-router-dom'
import { Container } from '../shared/ui/Container'

export function RegisterPage() {
  return (
    <main className="auth-page">
      <Container>
        <div className="auth-card">
          <h1>Регистрация</h1>

          <p>Создайте аккаунт</p>

          <form>
            <input
              type="text"
              placeholder="Имя"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Пароль"
            />

            <button type="submit">
              Создать аккаунт
            </button>
          </form>

          <p>
            Уже есть аккаунт?{' '}
            <Link to="/login">Войти</Link>
          </p>
        </div>
      </Container>
    </main>
  )
}