import { FiSquare, FiCheckSquare} from "react-icons/fi"


export default function TodoIconsCheck (props) {

  return (
    <div className='todoCheck'>
            {
              props.done ? 
              <button onClick={()=>{props.onTaskDone(props.id)}}><FiCheckSquare/></button> :
              <button onClick={()=>{props.onTaskDone(props.id)}}><FiSquare/></button>
            }
          </div>
  )
}