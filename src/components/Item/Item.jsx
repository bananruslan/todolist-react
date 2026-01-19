import './Item.css'

export function Item({ children, id, completed, onToggle, onDelete }) {
  return (
    <li className={`item ${completed ? 'completed' : ''}`}>
      <span className="text">
        -
        {children}
      </span>

      <div className="actions">
        <button onClick={() => onToggle(id)}>{completed ? '🌕' : '🌑'}</button>
        <button onClick={() => onDelete(id)}>🗑️</button>
      </div>
    </li>
  )
}
