import {useState} from 'react'
import TodoItemText from './TodoItemText/TodoItemText' 
import TodoIconsCheck from './TodoIcons/TodoIconsCheck'
import TodoIconsEdit from './TodoIcons/TodoIconsEdit'
import TodoIconsPriority from './TodoIcons/TodoIconsPriority'
import './TodoItem.css'
import { FiTrash } from "react-icons/fi"

export default function TodoItem (props) {

  let [itemText, setItemText] = useState(props.item.text)  
  let [editMode, setEditMode] = useState(false)
  let [bgColor, setBgColor] = useState('67979f')

 
  return (
    <>      
      <li className='todoItem' style={{backgroundColor:`${bgColor}`}}>
        <TodoItemText 
          item={props.item} 
          editMode={editMode} 
          itemText={itemText}
          setItemText={setItemText}
        />

        <div className='todoIcons'>
          <TodoIconsCheck 
            done={props.item.done}
            onTaskDone={props.onTaskDone}
            id={props.item.id}
          />
          <div className='todoDelete'>
            <button onClick={()=>{props.onItemDelete(props.item.id)}}><FiTrash/></button> 
          </div>
          <TodoIconsEdit 
            editMode={editMode}
            setEditMode={setEditMode}
            onTextChange={props.onTextChange}
            itemText={itemText}
            id={props.item.id}
            />
          
          <TodoIconsPriority setBgColor={setBgColor}/>
        </div>      
      </li>        
    </>
  )
}