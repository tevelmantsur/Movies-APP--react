import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchAnime from './SearchAnime'
import HomeSvg from './SVG/HomeSVG'
import MovieSVG from './SVG/MovieSVG'
import SearchSVG from './SVG/SearchSVG'

function NavBar(){

    const [on, toggle] = useState(false);
    

   return(
       <div > 
      {!on ? null : <SearchAnime/> } 
       <div className="navBar" >
    <div className="navBar-item">
    <Link to="/"><HomeSvg></HomeSvg></Link> 
    <Link to="/movies"><MovieSVG/></Link>
    <div onClick={() => toggle(!on)}>
    <SearchSVG/>
    </div>
    </div>  
    </div>
     </div>)
}
export default NavBar 