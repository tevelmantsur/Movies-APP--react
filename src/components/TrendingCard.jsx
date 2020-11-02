import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Stars from './Stars';



function TrendingCard(props){


    const data=props.data


    var settings = {
        dots: true,
        infinite: true,
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


    return(
          <div style={{padding: "2%"}}>
          <Slider {...settings}>
  {!data ? null:  data.map((e)=>{
      
      return <div key={e.id}>
      <Link to={`/anime/${e.id}`} style={{ textDecoration: 'none' }}>
      <div  style={{backgroundImage: "url(" + e.attributes.posterImage.small + ")" , position: "relative" ,
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
      </Slider>
          </div>
       )
}

export default TrendingCard