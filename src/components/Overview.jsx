import React from 'react'


function Overview(props){

const data = props.data[0]

    return ( !data ? "Skeleton here!!!!!!!!!!!!": 
    <div className="summery">
       <div>
       {!data.attributes.posterImage? <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347731138l/818960.jpg" alt="test"/> : <img src={data.attributes.posterImage.small} alt="test"/>}     
        </div> 
    <div style={{textAlign:"left"}}>
    <h1>Summery</h1>
    <p>{data.attributes.description}</p>
    <ul className="overView">
        <li>Released Date : {data.attributes.startDate}</li>
        <li>End Date : {data.attributes.endDate}</li>
        <li>Status : {data.attributes.status}</li>
        <li>Total Episodes: {data.attributes.episodeCount}</li>
        <li>Episode Length : {data.attributes.episodeLength} min </li>
    </ul>
    <div>  
      
    </div>
        </div> 
     
        </div>   
        
        )}

export default Overview