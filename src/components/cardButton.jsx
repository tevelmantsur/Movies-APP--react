import React from 'react'



function CardButton(props){

   
return(
    <button  value={props.value} onClick={props.onClick}  className="btn-Show"></button>
)
}
export default CardButton