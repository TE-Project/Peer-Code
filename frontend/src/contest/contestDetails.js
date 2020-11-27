     
import { Container, Row,Nav,Accordion,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import './contestDetails.css'
export default class pracDetails extends Component {
  render() {
    const ques=this.props.ques;
    const id=this.props.match.params.id;
    return (
      <div className="maintab">
    
<div id="wrapper">
  		<section id="generic-tabs">
    			<h1 class="callout">Contest Problems</h1>
        
        <div id="first-tab" class="tab-content">     
        {ques.filter(que => que._id == id).map(filteredque => (


  <div>

    {filteredque.question.map(ex=>(
                                <div>
                                  <Link to={"/contestquestion/"+id+"/"+ex._id}>
                                  <h1 class="btn1 -box-sd-effect">{ex.title}</h1> <br></br>
                                     </Link>
                                </div>
                              ))
                              }   
</div>
   
     
    ))}   
        
          </div>

        

		</section>	
	</div>

</div>
 

    )
  }
}

 