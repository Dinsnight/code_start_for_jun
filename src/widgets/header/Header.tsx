import { Link } from 'react-router-dom'
import { IconCode } from '@tabler/icons-react'

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <IconCode size={30} />
          <span>CodeStart</span>
        </Link>

        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/courses">Курсы</Link>
          {/*<Link to="/profile">
            <IconUser size={18} />
            Профиль
          </Link>*/}
        </nav>
      </div>
    </header>
  )
}