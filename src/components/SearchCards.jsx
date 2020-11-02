import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Stars from './Stars';


function SearchCard(props){

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


const {data } = props.data


    return(
        <div style={{padding: "1px 150px 50px 70px" , backgroundColor:"black"}}>
        <Slider {...settings}>
{!data ? <h1>Loading...</h1>:  data.map((e)=>{
  let url 
  !e.attributes.posterImage ?
   url="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71b0a868-5bf0-4c2f-ba02-d7b6e81d78e6/d7t1lcx-f63e32f5-57af-431a-8f05-22d3d75a5414.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzFiMGE4NjgtNWJmMC00YzJmLWJhMDItZDdiNmU4MWQ3OGU2XC9kN3QxbGN4LWY2M2UzMmY1LTU3YWYtNDMxYS04ZjA1LTIyZDNkNzVhNTQxNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9uc1GVEcMeAefdNRe10bFuWH5p1jomvOgNk3GrKyjUQ" 
   : url =  e.attributes.posterImage.small
     return <div key={e.id}>
     <Link to={`/anime/${e.id}`} style={{ textDecoration: 'none' }}>
     <div  style={{backgroundImage: "url(" + url + ")" , position: "relative" ,
     height:"450px",
     backgroundSize:"cover", 
     margin : "0% 10px",
     backgroundRepeat:"no-repeat",}}>
     <h3 style={{backgroundColor:"#000000c4" , color:"white" , textAlign:"center" , margin:"0% auto" , padding:"5% 0%"}} >{e.attributes.canonicalTitle}</h3>

     </div>
     </Link>
     <Stars rating={e.attributes.averageRating}/> 
     </div>
 })}
 <div onClick={props.onClick}>
  <h1 style={{ background:" #2b2b31", padding: "212px 0" , fontSize:"1.3rem"}}>Explore More</h1>
</div>
    </Slider>
    
        </div>
    )
}

export default SearchCard