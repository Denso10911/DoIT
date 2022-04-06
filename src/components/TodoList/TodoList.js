import {useState} from 'react'
import TodoItem from './TodoItem/TodoItem' 
import './TodoList.css'

export default function TodoList ({todoItems, setTodoItems}) {



  const onItemDelete = (itemId) => {
    setTodoItems([...todoItems].filter(e => (e.id !== itemId) ))
  }

  const onTextChange = (itemText, id) => {
    setTodoItems(prev => prev.map(item => (item.id === id ? {id : id, text: itemText,  done: false } : item)
      ))
  }

  const onTaskDone =(id) => {
    setTodoItems(prev => prev.map(item => (item.id === id ? {id : id, text : item.text,  done: !item.done } : item)
      ))
  }

  return (
    <>
        <ul className='todoList'>
          {todoItems.map(item => {
            return <TodoItem 
            item={item} 
            onItemDelete={onItemDelete}
            onTextChange={onTextChange}
            onTaskDone={onTaskDone}/>
            })
          }          
        </ul>

    </>
  )
}