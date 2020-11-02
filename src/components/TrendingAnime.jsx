import React, {useState , useEffect} from 'react'
import TrendingCard from './TrendingCard'

function TrendingAnime(){



    const [Tranding , setTranding] = useState([])
    const [Loading , SetLoading] = useState(false)
    const API = "https://kitsu.io/api/edge/trending/anime"

    const readTrending = (API)=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setTranding((data.data))})
    }

    useEffect(()=>{
        readTrending(API)
    SetLoading(true)
 
        },[])

    return (Loading ? <TrendingCard data={Tranding}/>:  null)
    } 

export default TrendingAnime