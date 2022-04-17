import './TodoItemText.css'

export default function TodoItemText ({item, editMode, itemText, setItemText}) {

  

  return (
    <> 
      {
        editMode &&  
          <div className='todoEdit'>
            <input 
              type='text' 
              value={itemText} 
              onChange={e => setItemText(e.target.value)}/> 
          </div> 
      }
      {
        !editMode &&
          <div className={item.done ? `todoText done` : `todoText active`}>
            <p>{item.text}</p>          
          </div>
          
        }       
    </>
  )
}   