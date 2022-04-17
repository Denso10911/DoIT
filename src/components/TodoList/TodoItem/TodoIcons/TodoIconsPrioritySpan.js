 export default function TodoIconsPrioritySpan (props) {
 
 return (
    <span 
      onClick={()=>{
        props.onColorChange(props.id, props.color)
        props.setEditMode(false)}}  
      style={{backgroundColor: `${props.color}`}}>
    </span>
 )
}