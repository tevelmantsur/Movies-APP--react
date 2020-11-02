import React from 'react'
import StarSVG from './SVG/StarSVG'

function Stars(props){

const starRating = props.rating / 20
const RoundNumber  =  Math.round(starRating * 10) / 10

let iconComponents 

    return(<div>
<div>
<p style={{color:"white"}}>Rating : {RoundNumber}</p>
        { iconComponents = [...new Array(5).fill(0)]
        .map((_, i) =>
         <StarSVG key={i} filled={i < RoundNumber -1}/>)}
</div>
    </div>)
}


export default Stars