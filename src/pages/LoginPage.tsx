import { Link } from 'react-router-dom'
import { Container } from '../shared/ui/Container'

export function LoginPage() {
  return (
    <main className="auth-page">
      <Container>
        <div className="auth-card">
          <h1>Вход</h1>

          <p>Войдите в свой аккаунт</p>

          <form>
            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Пароль"
            />

            <button type="submit">
              Войти
            </button>
          </form>

          <p>
            Нет аккаунта?{' '}
            <Link to="/register">Регистрация</Link>
          </p>
        </div>
      </Container>
    </main>
  )
}