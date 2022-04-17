import {useState} from 'react'
import TodoItem from './TodoItem/TodoItem' 
import './TodoList.css'

export default function TodoList ({todoItems, setTodoItems}) {


  const onItemDelete = (itemId) => {
    setTodoItems([...todoItems].filter(e => (e.id !== itemId) ))
  }

  const onTextChange = (itemText, id) => {
    setTodoItems(prev => prev.map(item => 
    (item.id === id ? {id : id, text: itemText,  done: false, color: item.color } : item)
      ))
  }

  const onTaskDone = (id) => {
    setTodoItems(prev => prev.map(item => (item.id === id ? {id : id, text : item.text,  done: !item.done, color: item.color } : item)
      ))
  }

    const onColorChange = (id, color) => {
    setTodoItems(prev => prev.map(item => (item.id === id ? {id : id, text : item.text,  done: item.done, color: color } : item)
      ))
  }

  return (
    <>
        <ul className='todoList' id='list'>
          {todoItems.map(item => {
            return <TodoItem 
            item={item} 
            onItemDelete={onItemDelete}
            onTextChange={onTextChange}
            onTaskDone={onTaskDone}
            onColorChange={onColorChange}            
            />
            })
          }          
        </ul>

    </>
  )
}