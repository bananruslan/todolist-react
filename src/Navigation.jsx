import { NavLink } from 'react-router'

export function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/todo" end>Todo</NavLink>
    </nav>
  )
}
