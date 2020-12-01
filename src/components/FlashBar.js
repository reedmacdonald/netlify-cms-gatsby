import React from 'react'

const FlashBar=({message})=>{
return(<div style={{position:'absolute',display:'grid',top:'0',left:'0',placeItems:'center',backgroundColor:'#44d7b6',width:'100vw',zIndex:'1000000000000000000',height:'50px'}}><h5 style={{color:'white'}}>{message}</h5></div>)
}
export default FlashBar