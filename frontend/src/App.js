import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

import React,{useState,useEffect} from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation/Navigation.js";
import SignUpPage from './signin/Signin.js';
import IdeContainer from './idecontainer/idecontainer.js'
import AboutUs from './aboutus/aboutus.js'
import Home from './home/home.js'

import Help from './help/contactus.js'
import Contest from './contest/contest.js'
import Practice from './practice/prac.js';
import PracDetails from './practice/pracDetails';
function App() {
    
const [ques ,setQues] = useState([])


   
useEffect(()=>{Axios.get('http://localhost:3001/read').then(resp=>{
setQues(resp.data)
  });
},[])
console.log("h1")
  
  return (
    <div className="allcomp">
    <Navigation/>
    
    <BrowserRouter>
    <Switch>
      <Route path="/about" exact component={AboutUs} />
      </Switch>
      <Switch>
      <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
      <Route path="/signin" exact component={SignUpPage} />
      </Switch>
      <Switch>
      <Route path="/ide" exact component={IdeContainer} />
      </Switch>
      <Switch>
      <Route path="/practice" exact component={()=><Practice ques={ques}/>} />
      </Switch>
      <Switch>
      <Route path="/contest" exact component={()=><Contest ques={ques}/>} />
      </Switch>
      <Switch>
      <Route path="/problem/:id" exact component={props=><PracDetails {...props} ques={ques}/>} />
      </Switch>
      <Switch>
      <Route path="/help" exact component={Help} />
      </Switch>
      
    </BrowserRouter>  
    <div data-aos="fade-up"
     data-aos-duration="2000">
    <footer class="bg-dark">
        <section id="footer" class="py-5">
          <div class="container text-center">
            <a href="https://twitter.com/code_peer" class="twitter"></a>
            <a href="https://www.linkedin.com/in/peer-code-b3585a200/" class="linkedin"></a>
            <a href="https://www.facebook.com/peer.code.1/" class="facebook"></a>
            <h6 class="m-0 mt-4 text-center text-white text-capitalize">Copyright &copy; 2020 designed by </h6>
            <h6 class="m-0 mt-4 text-center text-white text-capitalize">Mohit , Aniket , Shrishail, Harsh  </h6>
            
          </div>
        </section>
      </footer>
   </div>
   
    </div>
  );
}

export default App;
