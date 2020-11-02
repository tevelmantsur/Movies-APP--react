import React,{useState , useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import Slider from 'react-slick'
import Character from './character'

function Characters(props){


    const [Data, setData] = useState([{data:[], next:[]}])

    
    const API = `https://kitsu.io/api/edge/anime/${props.num}/characters`


     
    var settings = {
        dots: false,
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



  
 
 function ReadData(API){

    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
            setData(prev=> ({ data: data.data,   next: data.links.next ,  }))}) 
}

useEffect(()=>{
       ReadData(API)
    },[props.num])

    function LoadMore(){
        fetch(Data.next)
        .then((res)=>res.json())
        .then((data)=>{
            setData((prev => ({...prev, data: [...prev.data ,...data.data], next:data.links.next}))) 
        })  
    }
   
        
    return !Data.data ? null :
    <Slider {...settings}>
{ Data.data.map((e)=>{
       return <div  key={e.id}> 
        <Character id={e.id}/>
   </div>
    })}
    <div onClick={LoadMore}>
  <h1 style={{ background:" #2b2b31", padding: "187px 0" , fontSize:"1.3rem"}}>Explore More</h1>
</div>
    </Slider>
}

export default Characters