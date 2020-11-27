import React ,{useEffect,useState} from 'react'
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'
import QuizSummary from './quizsummary'
import {Link} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import createquiz from "./createquiz.js"
import { connect } from 'react-redux'
import { Container, Row,Col,Nav} from 'react-bootstrap'
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import "./prac.css"
import { Card,Tooltip,Button,OverlayTrigger } from 'react-bootstrap'
import Axios from 'axios'
import $ from 'jquery'

function Prac(props) {

  const ques=props.ques; 


$(function($){
	/* trigger when page is ready */
	$(document).ready(function (){
		
        //Tabs functionality
        //Firstly hide all content divs
        $('#generic-tabs div').hide();
        //Then show the first content div
        $('#generic-tabs div:first').show();
        //Add active class to the first tab link
        $('#generic-tabs ul#tabs li:first').addClass('active');
        //Functionality when a tab is clicked
        $('#generic-tabs ul#tabs li a').click(function(){
        	//Firstly remove the current active class
            $('#generic-tabs ul#tabs li').removeClass('active');
            //Apply active class to the parent(li) of the link tag
            $(this).parent().addClass('active');
            //Set currentTab to this link
            var currentTab = $(this).attr('href');
            //Hide away all tabs
            $('#generic-tabs div').hide();            
            //show the current tab
            $(currentTab).show();
            //Stop default link action from happening
            return false;
        });	
	});
});
    
  return (
    <div className="maintab">
    
<div id="wrapper">
  		<section id="generic-tabs">
    			<h1 class="callout">Practice Problems</h1>
        <ul id="tabs">
            <li>
                <a title="Home" href="#first-tab"><i class="fa "></i> Easy</a>	        
            </li>
            <li>
                <a title="Photos" href="#second-tab"><i class="fa" ></i> Medium</a>	
            </li>
            <li>
                <a title="About" href="#third-tab"><i class="fa "></i> Hard</a>	
            </li>			    
            
        </ul>
        <div id="first-tab" class="tab-content">        
        {ques.map(quiz=>{
                return(
                   <Link to={"/problem/"+quiz._id}>
                      
                       <h1 class="btn1 -box-sd-effect">{quiz.title}</h1> <br></br>
                       
                  
                      
                   </Link>
                )
              })}
          </div>

        <div id="second-tab" class="tab-content">        
          <h1>Problems to Be Added Soon</h1>
         
        </div>

        <div id="third-tab" class="tab-content">        
        <h1>Problems to Be Added Soon</h1>
        </div>

		</section>	
	</div>

</div>
    
  );
}





export default Prac

{/*
<h1>Class 6th</h1>
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Easy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Medium</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Hard</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {ques.map(quiz=>{
                return(
                   <Link to={"/problem/"+quiz._id}>
                      
                       <Card
                          bg='Dark'
                          text='black'
                          style={{ width: '18rem' }}
                          className="mb-2 crdlist"
                        >
                          <Card.Header>{quiz.title}
                          
                          <div className='rating-white rating' >
                         <span class="star">☆</span>
                      </div>   
                      </Card.Header>
                        </Card>

                     
                      
                   </Link>
                )
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              {quizesM.map(quiz=>{
                return(
                  <Link to={"/class/"+quiz.id}>
                       <div className='background-white'  >
                       
                      <Card>
                      <Card.Header>{quiz.title}
                      <div className='rating-white rating' >
                         <span onclick="myFunction()" class="star">☆</span>
                      </div>   

                      </Card.Header>
                              </Card>

                      
                      </div>
                   </Link>
                )
              })}
            </Tab.Pane>
          
          <Tab.Pane eventKey="third">
              {quizesH.map(quiz=>{
                return(
                   <Link to={"/class/"+quiz.id}>
                       <div className='background-white'  >
                       
                      <Card>
                      <Card.Header>{quiz.title}
                      <div className='rating-white rating' >
                         <span onclick="myFunction()" class="star">☆</span>
                      </div>   

                      </Card.Header>
                              </Card>

                     
                      </div>
                   </Link>
                )
              })}
            </Tab.Pane>
            </Tab.Content>
        </Col>
      </Row>
      </Tab.Container>
            */}




                {/* <div class="wrapper2">
  <ul class="tabs clearfix" data-tabgroup="first-tab-group">
    <li><a href="#tab1" class="active">Easy</a></li>
    <li><a href="#tab2">Medium</a></li>
    <li><a href="#tab3">Hard</a></li>
  </ul>
  <section id="first-tab-group" class="tabgroup">
    <div id="tab1">

    {ques.map(quiz=>{
                return(
                   <Link to={"/problem/"+quiz._id}>
                      
                       <Card className="cardlst">
                          <Card.Header>{quiz.title}
                          
                          <div className='rating-white rating' >
                         <span class="star">☆</span>
                      </div>   
                      </Card.Header>
                        </Card>

                     
                      
                   </Link>
                )
              })}

    </div>
    <div id="tab2">
      <h2>Heading 2</h2>
      <p>Adipisci autem obcaecati velit natus quos beatae explicabo at tempora minima voluptates deserunt eum consectetur reiciendis placeat dolorem repellat in nam asperiores impedit voluptas iure repellendus unde eveniet accusamus ex.</p>
    </div>
    <div id="tab3">
      <h2>Heading 3</h2>
      <p>Atque ratione soluta laboriosam illo inventore amet ipsum aliquam assumenda harum provident nam accusantium neque debitis obcaecati maxime officia saepe ad ducimus in quam libero vero quasi. Saepe sit nisi?</p>
    </div>
    
  </section>
            </div>*/}