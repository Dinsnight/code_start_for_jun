import { Container } from "../shared/ui/Container";

export function ProfilePage() {
  return (
    <main className="page">
      <Container>
        <div className="profile">
          <div className="avatar">B</div>

          <h1>Мой профиль</h1>

          <p>Студент CodeStart Academy</p>

          <div className="profile-stats">
            <div>
              <strong>0</strong>
              <span>Курсов</span>
            </div>

            <div>
              <strong>0</strong>
              <span>Уроков</span>
            </div>

            <div>
              <strong>0%</strong>
              <span>Прогресс</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}