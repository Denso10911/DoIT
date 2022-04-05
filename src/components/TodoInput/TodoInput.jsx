
export default function TodoInput ({setTextTodo, textTodo, setTodoItems, todoItems}){
  
  let onAddNewItem = (textTodo) => {
    if (!!textTodo) {
      setTodoItems([...todoItems, {
              id: 2,
              text: textTodo,
              editMode: false,
              del: false,
              done: false,
              priority: 'green',

          } ]) 
          setTextTodo('')
    }
  }

  return (
    <>
      <div>
         <input 
          onChange={(e)=>{setTextTodo(e.target.value)}} 
          type='text'
          placeholder ='What?'
          value={textTodo}
         />         
         <button 
          onClick={()=>{onAddNewItem(textTodo)}}         
         > Add </button> 
      </div>
    </>
  )
}