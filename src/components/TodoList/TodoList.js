import {useState} from 'react'
import TodoItem from './TodoItem/TodoItem' 
import './TodoList.css'

export default function TodoList ({todoItems, setTodoItems}) {
  return (
    <>
        <ul className='todoList'>
          {todoItems.map(item => {
            return <TodoItem 
            item={item} 
            setTodoItems={setTodoItems}
            todoItems={todoItems}/>
            })
          }          
        </ul>

    </>
  )
}