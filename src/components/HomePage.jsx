import React from 'react'

import SingelAnime from './SingelAnime'


function Home(){

  const number  = Math.floor(Math.random() * 1000)



 
    return (<div  style={{background:"#141414"}} >

        <SingelAnime cardNumber={number}/>
  
    </div>)
}


export default Home