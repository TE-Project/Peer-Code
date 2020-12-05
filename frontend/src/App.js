
import './App.css';
import Axios from 'axios';

import React,{useState,useEffect} from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation/Navigation.js";
import SignUpPage from './signin/Signin.js';
import IdeContainer from './idecontainer/idesidebar.js'
import AboutUs from './aboutus/aboutus.js'
import Home from './home/home.js'

import Help from './help/contactus.js'
import Contest from './contest/contest.js'
import ContestDetails from './contest/contestDetails.js'
import Practice from './practice/prac.js';
import PracDetails from './practice/pracDetails';
import Profile from './profile/profile.js'
import ContestQuestion from './contest/contestquestion.js'
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'

function App(props) {
  const {data,uid}=props;
  //console.log(data);
  var star = [];
  var solve= [];
  var solveH=[];
  var solveM=[];
  var solveE=[];
  var name='';
  var email='';
  var numberofquizes = 500;     
  for (var i = 0; i < numberofquizes; i++) {
  star.push(false);
  solve.push(false);
  }
 for(var key in data)
  {
    if(uid === data[key]["id"])
    {
      solve=data[key]["solved"];
      star=data[key]["star"];
      name=data[key]["name"];
      email=data[key]["email"];
      solveH=data[key]["solveH"];
      solveM=data[key]["solveM"];
      solveE=data[key]["solveE"];
    }
  }
const [ques ,setQues] = useState([])

useEffect(()=>{Axios.get('https://nameless-brushlands-46737.herokuapp.com/read').then(resp=>{
setQues(resp.data)
  });
},[])
const [cont ,setCont] = useState([])

useEffect(()=>{Axios.get('https://nameless-brushlands-46737.herokuapp.com/readcontest').then(resp=>{
setCont(resp.data)
  });
},[])
console.log(cont)
console.log(ques)  
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
      <Route path="/contest" exact component={()=><Contest ques={cont}/>} />
      </Switch>
      <Switch>
      <Route path="/problem/:id" exact component={props=><PracDetails {...props} ques={ques} solve={solve} solveE={solveE} solveM={solveM} solveH={solveH} uid={uid}/>} />
      </Switch>
      <Switch>
      <Route path="/contest/:id" exact component={props=><ContestDetails {...props} ques={cont}/>} />
      </Switch>
      <Switch>
      <Route path="/contestquestion/:id/:qid" exact component={props=><ContestQuestion {...props} ques={cont}/>} solve={solve} solveE={solveE} solveM={solveM} solveH={solveH} uid={uid} />
      </Switch>
      <Switch>
      <Route path="/profile" exact component={props=><Profile name={name}  email={email}/>} />
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


const mapStateToProps=(state)=>{

  if (state.firestore.ordered.users){
    return{
    data: state.firestore.ordered.users,
    uid: state.firebase.auth.uid
  }
  }
  else{
    return{}
  }
  
}
export default compose(

  firestoreConnect([
      { collection: 'users' }
    ]),
    connect(mapStateToProps)
  )(App);
       