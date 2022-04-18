import './styles.css'
import {useState, useEffect} from 'react'
import TodoList from './components/TodoList/TodoList' 
import TodoInput from './components/TodoInput/TodoInput' 

export default function App() {

  let [todoItems, setTodoItems] = useState([
    {
      id: 1,
      text:'hi',
      done: false,
      color: 'rgb(0, 150, 136)'
    }
  ])

  let [textTodo, setTextTodo] = useState('')


  let [appHeight, setAppHeight] = useState(100)

  useEffect(()=> {
    let list = document.getElementById('list')
    setAppHeight(100 + list.clientHeight)
  },[todoItems])


  return (
    <div className="App" style={{maxHeight:`${appHeight}px`, minHeight:`${appHeight}px`}}>       
        <TodoInput 
          setTextTodo={setTextTodo}
          textTodo={textTodo}
          setTodoItems={setTodoItems}
          todoItems={todoItems}
        />
        <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
      
    </div>
  );
}
