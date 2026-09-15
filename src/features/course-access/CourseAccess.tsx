import { useState } from 'react'

interface CourseAccessProps {
  courseId: string
  onSuccess: () => void
}

const COURSE_PASSWORD = '2345'

export function CourseAccess({
  courseId,
  onSuccess,
}: CourseAccessProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (password === COURSE_PASSWORD) {
      localStorage.setItem(`course-access-${courseId}`, 'true')
      setError('')
      onSuccess()
      return
    }

    setError('Неверный пароль')
  }

  return (
    <div className="course-access">
      <div className="course-access-icon">🔐</div>

      <h2>Курс закрыт</h2>

      <p>
        Чтобы открыть этот курс, введите пароль.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError('')
          }}
          placeholder="Введите пароль"
        />

        {error && (
          <p className="course-access-error">
            {error}
          </p>
        )}

        <button type="submit">
          Открыть курс
        </button>
      </form>
    </div>
  )
}