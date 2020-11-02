import React from 'react'
import CardButtton from './cardButton'
import Stars from './Stars'
import { Link } from 'react-router-dom';

function Card(props){

    const maxLenght = 247
    const style = {
        position: "relative" ,
        backgroundImage: "url(" + props.img + ")",
        height: "450px",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    }



    return(
        
    <div  name={props.id} style={style} >
     <Link to={`/anime/${props.id}`} style={{ textDecoration: 'none' , color:"white" }}>
    <div style={{ padding:"0%"}}>
     
    </div>
    <div>
    <h3 style={{backgroundColor:"#000000c4" , color:"white" , textAlign:"center" , margin:"0% auto" , padding:"5% 0%"}}>{props.name}</h3>
    </div>
    <div>
    </div>
    <div className="card-description">
    {props.description.length > maxLenght ? props.description.slice(0, maxLenght): null}


    <Stars rating={props.star}/>
    <CardButtton
         value={props.id}
    />
    </div>
    </Link>
    </div>

    )
}

export default Card