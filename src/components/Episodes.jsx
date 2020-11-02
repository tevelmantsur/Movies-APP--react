
import React,{useState, useEffect} from 'react'
import SingelEpisode from './SingelEpisode'
function Episodes(props){



const [Data, setData] = useState([{data:[], next:[]}])



const API = `https://kitsu.io/api/edge/anime/${props.num}/episodes`



const ReadData = (API)=>{

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
    
    


    return( !Data.data ? null : <SingelEpisode data={Data} onClick={LoadMore}/>)
   

}


export default Episodes