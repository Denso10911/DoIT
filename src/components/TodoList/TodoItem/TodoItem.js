import {useState} from 'react'
import TodoItemText from './TodoItemText/TodoItemText' 
import TodoIconsCheck from './TodoIcons/TodoIconsCheck'
import TodoIconsEdit from './TodoIcons/TodoIconsEdit'
import TodoIconsPriority from './TodoIcons/TodoIconsPriority'
import './TodoItem.css'
import { FiTrash } from "react-icons/fi"
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default function TodoItem (props) {

  let [itemText, setItemText] = useState(props.item.text)  
  let [editMode, setEditMode] = useState(false)
  const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}
 
  return (
    <>      
     <StyleRoot>
     <li style={styles.slideInLeft}>
      <div className='todoItem' style={{backgroundColor:`${props.item.color}`}}>
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
          
          <TodoIconsPriority  id={props.item.id} onColorChange={props.onColorChange}/>
        </div>  
      </div>
     </li>
         
       </StyleRoot>  
    </>
  )
}