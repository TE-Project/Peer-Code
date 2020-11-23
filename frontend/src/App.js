import logo from './logo.svg';
import './App.css';



import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Navigation from "./navigation/Navigation.js";
import SignUpPage from './signin/Signin.js';
import IdeContainer from './idecontainer/idecontainer.js'
import AboutUs from './aboutus/aboutus.js'
import Home from './home/home.js'
import Help from './help/help.js'

import Practice from './practice/prac.js';
function App() {
  return (
    <div>
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
      <Route path="/practice" exact component={Practice} />
      </Switch>
      <Switch>
      <Route path="/help" exact component={Help} />
      </Switch>
      
    </BrowserRouter>   
    </div>
  );
}

export default App;
