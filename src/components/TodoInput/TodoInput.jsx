
import './TodoInput.css'
import { FcTodoList } from 'react-icons/fc'

export default function TodoInput ({setTextTodo, textTodo, setTodoItems, todoItems}){

  let onAddNewItem = (textTodo) => {
    if (!!textTodo) {
      setTodoItems([...todoItems, {
              done: false,
              id: Date.now(),
              text: textTodo,
              color: 'rgb(0, 150, 136)',
          } ]) 
          setTextTodo('')
    }
  }

  return (
    <>
      <div className='todo__add'>
         <input 
          onChange={(e)=>{setTextTodo(e.target.value)}} 
          type='text'
          placeholder ='What?'
          value={textTodo}
          className ="todo__input"
         />         
         <button 
          onClick={()=>{onAddNewItem(textTodo)}}
          className='todo__button'         
         >Add</button> 
         <button 
          onClick={()=>{onAddNewItem(textTodo)}}
          className='todo__button media'         
         ><FcTodoList/></button>         
      </div>
    </>
  )
}