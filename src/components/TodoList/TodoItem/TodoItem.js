import {useState} from 'react'
import './TodoItem.css'
import { FiTrash, FiEdit, FiSquare, FiCheckSquare, FiSave } from "react-icons/fi"
import { BiColorFill } from "react-icons/bi"

export default function TodoItem ({item, onItemDelete, onTextChange, onTaskDone}) {

  let [editMode, setEditMode] = useState(false)
  let [itemText, setItemText] = useState(item.text)


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
          <div className={item.done ? `todoText done` : `todoText active`}>
            <p>{item.text}</p>          
          </div>
          )
        } 
         
        <div className='todoCheck'>
          {
            item.done ? 
            <button onClick={()=>{onTaskDone(item.id)}}><FiCheckSquare/></button> :
            <button onClick={()=>{onTaskDone(item.id)}}><FiSquare/></button>
          }
        </div>
        <div className='todoDelete'>
          <button onClick={()=>{onItemDelete(item.id)}}><FiTrash/></button> 
        </div>
        {
          editMode ? ( 
          <div className='todoEdit'>
            <button onClick = {()=>{
              onTextChange(itemText, item.id)
              setEditMode(!editMode)
            }
              }><FiSave/></button> 
          </div> ) : (
            <div className='todoEdit'>
            <button onClick ={()=>setEditMode(!editMode)}><FiEdit/></button> 
          </div>
          )
        } 
        <div className='todoPiority'>
          <button><BiColorFill/></button> 
        </div>      
      </li>        
    </>
  )
}