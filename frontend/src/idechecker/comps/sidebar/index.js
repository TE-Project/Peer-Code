import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'

import { changeStdin, submitCode, checkResult } from '../../store/actions'
import "./index.css"
import {updateSolved} from "../../../store/solvedAction.js";

class Sidebar extends React.Component {
    
    state = {
        check:false
      } 

    handleStdin(e) {
        
    }
    handleSubmit(e) {
       
        e.preventDefault();
        this.props.changeStdin(1)
        this.props.submitCode(this.props.editor,this.props.data.examples[0].input);
    } 
    render() {
        console.log(this.props.data);
        let request = this.props.request;
        let disabled = (request.init && !request.completed) ;
        let output = null, status = null, stderr = null, comp_out = null;
        if (!request.init) {
            output = "Run the program to see its output"
        }
        else if (request.error) {
            output = "an error occured, see logs for more"
            status = 'Error'
        }
        else if (request.completed) {
            let result = request.output;
            status = "Finished execution" ;    stderr = result.stderr;
            
            output=result.stdout.trim();
            

            if(output===this.props.data.examples[0].output){
                comp_out = "Correct Answer";
                
    
            }
            else{
                comp_out="Wrong Answer ";
            }
            
            
        }
        else if (request.token) {
            output = "Waiting for Results..."
            if (request.output)
                status = request.output.status.description
            else
                status = "Queued"
        }
        else {
            output = "Loading..."
        }
        return (
            <>
            
                <fieldset disabled={disabled}>
                <div className="ipbox">
                <Form onSubmit={this.handleSubmit.bind(this) } className="w-100">
                   
                    <Button className="ml-1" variant="danger" type="submit">Run</Button>
                    </Form>
                    </div>
                    
                    <Card className="mt-4" bg="dark" text="white">
                        <Card.Header><strong>Output</strong></Card.Header>
                        <Card.Body>
                            <Card.Text className="text-danger">{stderr}</Card.Text>
                            <Card.Text className="text-warning">{comp_out}</Card.Text>
                        </Card.Body>
                    </Card>
                </fieldset>
                
                
                
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}



export default connect(mapStateToProps,{changeStdin, submitCode, checkResult} )(Sidebar)
