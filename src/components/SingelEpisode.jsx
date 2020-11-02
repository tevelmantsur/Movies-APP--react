import React from 'react'
import Slider from 'react-slick'

function SingelEpisode(props){

const data = props.data
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

    return (
        
        <Slider {...settings}>
  {      data.data.map((e)=>{
       return <div key={e.id}> 
        {e.attributes.canonicalTitle ? <div>
       {e.attributes.thumbnail ?  <img style={{width:"300px" , height:"150px"}} alt="null atm" src={e.attributes.thumbnail.original}></img>  :
       <img style={{width:"300px" , height:"150px"}} alt="null atm" src="https://i.ytimg.com/vi/puE_sVX-acI/hqdefault.jpg"></img> }
         <h1>Episode {+e.attributes.number}</h1>
         <h5 >{e.attributes.canonicalTitle}</h5>
         <p>{e.attributes.airdate}</p> 
         {!e.attributes.description ?  "No Description" : <div> 
          <p>{e.attributes.description.slice(0, 120) + "...."}</p>
           <p style={{color:"blue"}}> read More</p>  </div> }
         </div> : 'This is a Movie /// missing episode name'}
    </div>
    })}
    <div onClick={props.onClick}>
  <h1 style={{ background:" #2b2b31", padding: "161px 0" , fontSize:"1.3rem"}}>Explore More</h1>
</div>
    </Slider> )
}

export default SingelEpisode