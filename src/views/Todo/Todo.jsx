import { useState } from 'react'

import { Button } from '../../components/Button'
import { Item } from '../../components/Item/Item'
import { List } from '../../components/List/List'
import './Todo.css'

function Todo() {
  const [items, setItems] = useState([])

  const onDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const onToggleItem = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  const onAddItem = () => {
    setItems(prevItems => [...prevItems, { id: Date.now(), text: String(new Date()).toString(), completed: false }])
  }

  return (
    <>
      <div className="title">Туду лист</div>

      <Button onClick={onAddItem}>Добавить новый айтем</Button>

      <List>
        {items.map(item => (
          <Item key={item.id} id={item.id} completed={item.completed} onDelete={onDeleteItem} onToggle={onToggleItem}>{item.text}</Item>
        ))}
      </List>
    </>
  )
}
export default Todo
