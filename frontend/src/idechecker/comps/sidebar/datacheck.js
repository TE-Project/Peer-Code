import React , { Component }  from'react'
import {connect} from 'react-redux';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import {updateSolved} from "../../../store/solvedAction.js";

class Datacheck extends Component{
  

  
  state = {
    ans:'',
    id:this.props.key,
    quiz:'',
    uid:'',
    solve:'',
    solveH:'',
    solveM:'',
    solveE:'',
     ansd:'',
    ansclass:''
    
  } 
  
  render(){
    if(this.props.uid)
    {
        this.setState({
          uid:this.props.uid,
          solve:this.props.solve,
          solveH:this.props.solveH,
          solveM:this.props.solveM,
          solveE:this.props.solveE,
       
        }, () => {
          //console.log(this.state,this.props);
          
          this.props.updateSolved(this.state);
        }); 
  
        
        
        
      }
      else{
        alert("Please Login To Submit Answer");
      }
  return(
    <div>
      <Redirect to='/practice'/>
      </div>
  );
}
}


const mapDispatchToProps=(dispatch)=>{

  
  return{
    updateSolved:(data)=>dispatch(updateSolved(data))
  }
}
export default connect(null,mapDispatchToProps)(Datacheck);