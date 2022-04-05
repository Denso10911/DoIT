import {useState} from 'react'
import './TodoItem.css'

export default function TodoItem ({item, setTodoItems, todoItems}) {

  let [editMode, setEditMode] = useState(false)
  let [itemText, setItemText] = useState(item.text)





  const onItemDelete = () => {
    setTodoItems(todoItems.filter(e => (e.id !== item.id) ))
  }
  const onTextChange = (text) => {
    item.text = text
    setEditMode(!editMode)
       }


  return (
    <>      
      <li className='todoItem'>
      {
          editMode ? ( 
          <div className='todoEdit'>
            <input 
              type='text' 
              value={itemText} 
              onChange={e => setItemText(e.target.value)}/> 
          </div> ) : (
          <div className='todoText'>
            <p>{item.text}</p>          
          </div>
          )
        } 
         
        <div className='todoCheck'>
          <input type='checkbox'/> 
        </div>
        <div className='todoDelete'>
          <button onClick={()=>{onItemDelete()}}>Delete</button> 
        </div>
        {
          editMode ? ( 
          <div className='todoEdit'>
            <button onClick = {()=>onTextChange(itemText)}>Save</button> 
          </div> ) : (
            <div className='todoEdit'>
            <button onClick ={()=>setEditMode(!editMode)}>Edit</button> 
          </div>
          )
        } 
        <div className='todoPiority'>
          <button>Priority</button> 
        </div>      
      </li>        
    </>
  )
}