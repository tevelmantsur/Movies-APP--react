import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {useLocation} from 'react-router-dom'
import RouterSingelAnime from '../Router-Singel';
import Stars from './Stars';
import {Link} from 'react-router-dom'
import AnimeCarusel from './AnimeCarusel';
import TrendingAnime from './TrendingAnime';
function SingelCardDetails(props){

  console.log(props)
   const data = props.data[0]



   let location = useLocation();
  
    return  !data ?  <SkeletonTheme color="#202020" highlightColor="#444">
    <div>
   
<div className="Singel-Card">
<div className="singel-card-info">
<Skeleton  height="50px" width="50%" /> 
<h1><Skeleton  height="300px" width="90%" /></h1>
<h1><Skeleton  height="50x" width="50%" /></h1>
</div>
<Skeleton top="20%" height="550px" width="100%" /> 
</div> 
{location.pathname !== '/' ?  <div style={{ textAlign: "-webkit-center" , background: "#141414"}}>
<ul className="router-Grid">
  <Skeleton/>
  <Skeleton/>
  <Skeleton/>
  <Skeleton/> 
</ul> 
    <div style={{display:"grid" , gridTemplateColumns:"32% 60%" , padding: "2% 5%"}}>
       <div>
           <Skeleton width={250} height={350}/>
        </div> 
    <div style={{textAlign:"left"}}>
    <h1><Skeleton/></h1>
    <p><Skeleton height={150}/></p>
    <ul style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
        <li><Skeleton/></li>
        <li><Skeleton/></li>
        <li><Skeleton/></li>
        <li><Skeleton/></li>
        <li><Skeleton/></li>
    </ul>
    <div>  
    </div>
        </div> 
        </div>  
</div> 
: null}
<div style={{background:"#141414" ,padding: "5% 50px"}}>
      <Skeleton height={350} ></Skeleton>   
    
    </div>
    <div style={{background:"#141414" ,padding: "2% 50px"}}>
      <Skeleton height={350} ></Skeleton>
    </div>
  
</div>
</SkeletonTheme>
    :  <div className="Singel-Container">
    <div className="Singel-Card">
    <div className="singel-card-info">  
    <Link to={`/anime/${data.id}`} style={{color:"white",textDecoration:"none"}}>
      <h1>{data.attributes.canonicalTitle }</h1>  
      </Link>
     <p>{data.attributes.description}</p>
     <h4><Stars rating={data.attributes.averageRating}/>
     </h4>
     </div>
     <div className="singel-card-img">
     {data.attributes.coverImage == null ?
     <img alt="anime Charcter in japan" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71b0a868-5bf0-4c2f-ba02-d7b6e81d78e6/d7t1lcx-f63e32f5-57af-431a-8f05-22d3d75a5414.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzFiMGE4NjgtNWJmMC00YzJmLWJhMDItZDdiNmU4MWQ3OGU2XC9kN3QxbGN4LWY2M2UzMmY1LTU3YWYtNDMxYS04ZjA1LTIyZDNkNzVhNTQxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9uc1GVEcMeAefdNRe10bFuWH5p1jomvOgNk3GrKyjUQ"/>  
     : <img alt={data.attributes.canonicalTitle} src={data.attributes.coverImage.original}/> }
   
     </div>
    </div> 
    {location.pathname !== '/' ?  <RouterSingelAnime mydata={props.data} num={data.id} />  :  null }
    <div style={{background:"#141414" ,padding: "2% 50px"}}>
      <TrendingAnime/>
      <AnimeCarusel/> 
<div style={{height:"50px"}}>
</div>
    </div>
  </div> 
 

    
     }

export default SingelCardDetails