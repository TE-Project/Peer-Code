import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

import NavigationAuth from './NavigationAuth.js';
import NavigationNonAuth from './NavigationNonAuth.js'
import {connect} from 'react-redux';

const Navigation = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <NavigationAuth /> : <NavigationNonAuth />;

  return (
    
      <div className="navall">
        {links}
      </div>
    
  )
}





const mapStateToProps = (state)=>{
  
  return{
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Navigation);


