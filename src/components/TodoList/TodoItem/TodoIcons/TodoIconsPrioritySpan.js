 export default function TodoIconsPrioritySpan (props) {
 
 return (
    <span 
      onClick={()=>{
        props.setBgColor(props.color)
        props.setEditMode(false)}}  
      style={{backgroundColor: `${props.color}`}}>
    </span>
 )
}