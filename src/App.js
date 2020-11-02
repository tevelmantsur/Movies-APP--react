import React  from 'react'
import './App.css';
import Movies from './components/AnimeHouse'
import { Route, useParams , Switch , useLocation} from 'react-router-dom';
import SingelAnime from './components/SingelAnime';
import { useTransition, animated } from 'react-spring'
import NavBar from './components/Navbar'
import Home from './components/HomePage';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';


function App() {

  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })


 const SingelAnimel= (props)=>{
  let { id } = useParams();

    return(
    <div className="singelAnime"> 
    <SingelAnime cardNumber={id}/>
    </div>) 
 }
 
 const AllMovies= (props)=>{
   return  <Movies/>
 }

  return (<div>
<NavBar/>

      <div style={{paddingLeft:"80px"}}>
  <Route exact path="/" component={Home}/>
    <div>
    <Route exact path="/movies" component={AllMovies}/>
  {transitions.map(({ item, props, key }) =>{
  return (
    <animated.div key={key} style={props}>
    <ScrollToTop> 
    <Switch location={item[0]}> 

    <Route  path="/anime/:id" component={SingelAnimel} />

     </Switch> 
     </ScrollToTop>
    </animated.div>
)})}
<Footer/>
</div>
 </div>
    </div>

  
  );
}

export default App;
