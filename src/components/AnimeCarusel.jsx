import React, {useState , useEffect} from 'react'
import TrendingCard from './TrendingCard'

function AnimeCarusel(){



    const [Tranding , setTranding] = useState([])

    const API = "https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]"

    const readAnime = (API)=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
            setTranding((data.data))})
    }

    useEffect(()=>{
        readAnime(API)
 
        },[])

    return ( <TrendingCard data={Tranding}/> )
}

export default AnimeCarusel