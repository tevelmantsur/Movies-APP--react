import React , {useState , useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


function Character(props){

    

    const [Character , SetCharacter] = useState([])
    const SINGEL_CHARACTER_API = `https://kitsu.io/api/edge/media-characters/${props.id}/character`



    useEffect(()=>{ 

        fetch(SINGEL_CHARACTER_API)
        .then((res)=>res.json())
        .then((data)=>{
            SetCharacter(prev=> ({ ...data.data,...prev.data}))
            }) 
        }
        ,[])



    return(
    <div>  
         {Character.id ? 
         
        <div className="card">
        <h3>{Character.attributes.canonicalName}</h3>
    
        {Character.attributes.image ?  <img className="image" alt={Character.attributes.canonicalName} src={Character.attributes.image.original}/> : <img className="image" alt="no found" src="https://static.zerochan.net/Fredrika.%28Hitsugi.no.Chaika%29.full.1850904.jpg"/>  }
        
        </div>
         
         
         : null }
    </div>
    )
}

export default Character