import React from 'react'

const RedButton=({onClick,message})=>{
return(<div onClick={onClick} style={{backgroundColor:'#fb113f',color:'white',display:'grid',placeItems:'center',height:'50px',width:'170px',borderRadius:'30px'}}><div>{message}</div></div>)
}
export default RedButton