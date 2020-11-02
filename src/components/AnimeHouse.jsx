import React,{useState, useEffect} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from './cards'


function Movies(){
const [Data, setData] = useState([{data:[], next:[]}])
const [isBottom, setIsBottom] = useState(true);

const API= "https://kitsu.io/api/edge/anime"


function ReadData(API){

  fetch(API )
  .then((res)=>res.json())
  .then((data)=>{
          setData(prev=> ({ data: data.data, next: data.links.next }))}) 
}

function LoadMore(){
  fetch(Data.next )
  .then((res)=>res.json())
  .then((data)=>{
      setData((prev => ({...prev, data: [...prev.data ,...data.data], next:data.links.next}))) 
  })  
}

useEffect(()=>{
  ReadData(API)
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


useEffect(() => {
    if (isBottom) { 
      LoadMore()
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom]); 



useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


//Set True if reach Buttom//

function handleScroll(){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-100) {
            setIsBottom(true)
         }else{
             setIsBottom(false)
         }
}



return(<div>


<div>

<div  >

{!Data.data ? 
  <SkeletonTheme color="#202020" highlightColor="#444">
<div className="grid-container"  style={{textAlign:"center"}}>

 <div>
 <h1><Skeleton width={200}></Skeleton></h1>
 <Skeleton height={400} width={300}></Skeleton>
 </div>
 <div>
 <h1><Skeleton width={200}></Skeleton></h1>
 <Skeleton height={400} width={300}></Skeleton>
 </div>
 <div>
 <h1><Skeleton width={200}></Skeleton></h1>
 <Skeleton height={400} width={300}></Skeleton>
 </div>
 <div>
 <h1><Skeleton width={200}></Skeleton></h1>
 <Skeleton height={400} width={300}></Skeleton>
 </div>
 <div>
 <h1><Skeleton width={200}></Skeleton></h1>
 <Skeleton height={400} width={300}></Skeleton>
 </div>


</div>
</SkeletonTheme>
: <div  className="grid-container">
 {Data.data.map((e)=>
      <Card 
      key={e.id}
      star={e.attributes.averageRating}
     id={e.id}
    name={e.attributes.canonicalTitle}
    img={e.attributes.posterImage.small}
    description={e.attributes.description}
    />
    
    )} 

</div>}

</div>
</div>

</div>)
}
    export default Movies