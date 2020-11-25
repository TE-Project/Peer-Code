
import { Container, Row,Nav,Accordion,Card,Button} from 'react-bootstrap';

import React, { Component } from 'react'
import './pracDetails.css'
export default class pracDetails extends Component {
  render() {
    const ques=this.props.ques;
    const id=this.props.match.params.id;
    return (
      <div>
  {ques.filter(que => 
    que._id == id).map(filteredque => (
    
        /* /* <div> */
      /* <h1>{filteredque.title}</h1></div>
    <h3>{filteredque.description}</h3>
    <h1>{filteredque.input}</h1>
    <h1>{filteredque.output}</h1> */ 
    <div class="wrapper_det">
  <div class="top"><div class="title"><h1>{filteredque.title}</h1></div></div>
  <div cp="content">
    <div class="card first">
      
      
      <p class="text">{filteredque.description}</p>
                       <Accordion>
                       <Card>
                         <Card.Header>
                           <Accordion.Toggle as={Button} className="btn btn-primary" variant="button" eventKey="0">
                             input format
                           </Accordion.Toggle>
                         </Card.Header>
                         <Accordion.Collapse eventKey="0">
                           <Card.Body>{filteredque.input} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
                         <Card.Header>
                           <Accordion.Toggle as={Button} className="btn btn-primary" variant="button" eventKey="1">
                            output format
                           </Accordion.Toggle>
                         </Card.Header>
                         <Accordion.Collapse eventKey="1">
                           <Card.Body>{filteredque.output} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                       <Card>
                           <Card.Header>
                              <p class="text"> {filteredque.constraints} </p>
                           </Card.Header>
                       </Card>
                       <Card>
                           <Card.Header>
                              <p class="text"> {filteredque.constraints} </p>
                           </Card.Header>
                       </Card>
                       <Card>
                         <Card.Header>
                           <Accordion.Toggle as={Button} className="btn btn-danger" variant="button" eventKey="4">
                             Show Explanation
                           </Accordion.Toggle>
                         </Card.Header>
                         <Accordion.Collapse eventKey="4">
                           <Card.Body>{filteredque.explanation} </Card.Body>
                         </Accordion.Collapse>
                       </Card>
                     </Accordion>
    </div>
  
  </div>
</div>


          
        
      

  ))}
</div>
    )
  }
}


    //  <div className="card container quiz bg">
    //        <div className="card-content">
    //          <span className="card-title">{filteredque.title} </span>
    //          <p className="grey-text">{filteredque.description} </p>
    //                    <Accordion>
    //                    <Card>
    //                      <Card.Header>
    //                        <Accordion.Toggle as={Button} className="btn btn-primary" variant="button" eventKey="0">
    //                          input format
    //                        </Accordion.Toggle>
    //                      </Card.Header>
    //                      <Accordion.Collapse eventKey="0">
    //                        <Card.Body>{filteredque.input} </Card.Body>
    //                      </Accordion.Collapse>
    //                    </Card>
    //                    <Card>
    //                      <Card.Header>
    //                        <Accordion.Toggle as={Button} className="btn btn-primary" variant="button" eventKey="1">
    //                         output format
    //                        </Accordion.Toggle>
    //                      </Card.Header>
    //                      <Accordion.Collapse eventKey="1">
    //                        <Card.Body>{filteredque.output} </Card.Body>
    //                      </Accordion.Collapse>
    //                    </Card>
    //                    <Card>
    //                        <Card.Header>
    //                            {filteredque.constraints}
    //                        </Card.Header>
    //                    </Card>
    //                    <Card>
    //                      <Card.Header>
    //                        <Accordion.Toggle as={Button} className="btn btn-danger" variant="button" eventKey="4">
    //                          Show Explanation
    //                        </Accordion.Toggle>
    //                      </Card.Header>
    //                      <Accordion.Collapse eventKey="4">
    //                        <Card.Body>{filteredque.explanation} </Card.Body>
    //                      </Accordion.Collapse>
    //                    </Card>
    //                  </Accordion>
            
            
    //        </div>

         
    //    </div> 