import { FiSave, FiEdit} from "react-icons/fi"


export default function TodoIconsEdit (props) {

  return (
       <>
        {
          props.editMode && 
          <div className='todoEdit'>
            <button onClick = {()=>{
              props.onTextChange(props.itemText, props.id)
              props.setEditMode(!props.editMode)
            }}>
              <FiSave/>
            </button> 
          </div> 
        }

        { 
          !props.editMode &&
            <div className='todoEdit'>
              <button onClick ={()=>props.setEditMode(!props.editMode)}>
                <FiEdit/>
              </button> 
            </div>
        }
       </>
  )
}