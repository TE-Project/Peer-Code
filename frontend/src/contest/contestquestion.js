
import { Container, Row,Nav,Accordion,Card,Button} from 'react-bootstrap';
import IdeButton from '../idecontainer/idecontainer.js'
import React, { Component } from 'react'
import './contestquestion.css'
export default class Contestquestions extends Component {
  render() {
    
    const ques=this.props.ques;
    const id=this.props.match.params.id;
    const qid=this.props.match.params.qid;
    return (
      <div>
   {ques.filter(que => que._id == id).map(filteredque => (


<div>

  {filteredque.question.filter(con_que => con_que._id == qid).map(ex=>(
                             
                                
                                <div class="wrapper_det">
  <div class="top"><div class="title"><h1>{ex.title}</h1></div></div>
  <div class="content">
    <div class="card first">
      
      
      <p class="text tit">{ex.description}</p>
                       <Accordion>
                       <Card>
                         
                           <Accordion.Toggle as={Button} className="btn btn-primary btn-sm" variant="button"eventKey="0">
                             Input format
                           </Accordion.Toggle>
                         
                         <Accordion.Collapse eventKey="0">
                           <Card.Body>{ex.input} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
    
                           <Accordion.Toggle as={Button} className="btn btn-primary btn-sm" variant="button" eventKey="1">
                            Output format
                           </Accordion.Toggle>
                         
                      
                         <Accordion.Collapse eventKey="1">
                           <Card.Body>{ex.output} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
                           
                              <p class="text"> {ex.constraints} </p>
                          
                       </Card>
                       <Card>
                            <p>Test Cases</p>
                            <hr />
                              {ex.examples.map(exmp=>(
                                <div>
        
                                     <p class="text">Input: {exmp.input}</p>
                                     <p class="text">Output: {exmp.output}</p>
                                     <hr/>
                                </div>
                              ))
                              }                          
                       </Card>
                     </Accordion>
                     
    </div>
    </div>
  
  </div>



        
))
}   


</div>
 
   
  ))}  
  {ques.filter(que => que._id == id).map(filteredque => (
    <div>
    {filteredque.question.filter(con_que => con_que._id == qid).map(ex=>(
<IdeButton ipdata={filteredque}  solve={this.props.solve} solveE={this.props.solveE} solveM={this.props.solveM} solveH={this.props.solveH} uid={this.props.uid}/>
    ))}
    </div>
    ))}
</div>
    )
  }
}

 