import "./styles.css";
import {useState} from 'react'
import TodoList from './components/TodoList/TodoList' 
import TodoInput from './components/TodoInput/TodoInput' 

export default function App() {

  let [todoItems, setTodoItems] = useState([
    {
      id: 1,
      text:'hi',
      done: false
    }
  ])

  let [textTodo, setTextTodo] = useState('')

  return (
    <div className="App">
      
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
