import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Episodes from './components/Episodes'
import Characters from './components/characters'
import Overview from './components/Overview'
import AllActors from './components/AllActors';


function RouterSingelAnime(props){


    function Characterr() {
        return (
          <div style={{padding: "2% 50px"}}>
          
          <h2>Characters</h2>
           <Characters num={props.num}></Characters>
           <hr/>
          </div>
        );
      }
      
      function Episode() {
        return (
          <div style={{padding: "2% 50px"}}>
          <h2>Episodes</h2>
            <Episodes num={props.num}></Episodes>
            <hr/>
          </div>
        ); 
      }
      
      function Actors() {
        return (  <div>
          <div style={{padding: "2% 50px"}}> 
          <h2>Actors</h2>
  <AllActors num={props.num}/> 
  <hr/>
        </div>
        </div>
         
            )
      }


    

    
    return <div>

       
              <Router>
      <div style={{ textAlign: "-webkit-center" , background: "#141414"}} >
        <ul className="router-Grid">
        <li>
            <Link to={`/anime/${props.num}`}>Overview</Link>
          </li>
          <li>
            <Link to={`/anime/${props.num}/Episode`}>Episode</Link>
          </li>
          <li>
            <Link to={`/anime/${props.num}/Characters`}>Character</Link>
          </li>
          <li>
            <Link to={`/anime/${props.num}/Actors`}>Actors</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path={`/anime/${props.num}/`}>
            <Overview data={props.mydata}/>
          </Route>
          <Route exact path={`/anime/${props.num}/Episode`}>
            <Episode/>
          </Route>
          <Route path={`/anime/${props.num}/Characters`}>
            <Characterr/>
          </Route>
          <Route path={`/anime/${props.num}/Actors`}>
            <Actors/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
}

export default RouterSingelAnime