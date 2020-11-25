
import { Component } from "react";
import React from "react";
import { connect } from 'react-redux'
import { createFeedback } from '../store/feedbackAction.js'
import {Modal,Row,Col,Container,Button} from 'react-bootstrap'
import {Redirect,withRouter} from 'react-router-dom'
import './help.css'
 class help extends Component {
  state={
    name:'',
    mail:'',
    feedback:'',
    flag:true
   }
   handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    
   };

   handleSubmit=(e)=>{
    this.clearForm()
    e.preventDefault();
    if(this.state.name!=''&&this.state.mail!=''&&this.state.feedback!='')
     { //console.log(this.state.mail);
        this.setState({
       flag:true
    },()=>{
      this.props.createFeedback(this.state);
        alert("feedback send successfully!!!!!");
          //console.log(e);
      
    });
        
       
   }

 }
 clearForm=()=>{
  document.getElementById("contact").reset();
 }
    render() {
      if(this.flag)
      {
        this.setState({
          flag:false
        },()=>{
          //console.log(this.flag)
            return(
           <Redirect to='/' />
          )
          });
      
      }
        return (

          <div  data-aos="flip-up">
          <div class="container">  
<form type="submit" id="contact"  onSubmit={this.handleSubmit} >
<h3>Contact Us</h3>
<fieldset>
<input placeholder="Your name" type="text" tabindex="1" value={this.name}  onChange={this.handleChange} required autofocus/>
</fieldset>
<fieldset>
<input placeholder="Your Email Address" type="email" tabindex="2" value={this.mail} onChange={this.handleChange} required/>
</fieldset>

<fieldset>
<textarea placeholder="Type your Message Here...." tabindex="5" value={this.feedback} onChange={this.handleChange} required></textarea>
</fieldset>
<fieldset>
{this.err==' '?<h6>{this.err}</h6>:null}
<button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
</fieldset>

</form>


</div>
      </div>

        )
    }
}


const mapDispatchToProps = dispatch => {
  return {
    createFeedback: (feedback) => dispatch(createFeedback(feedback))
  }
}
export default withRouter(connect(null, mapDispatchToProps)(help));


