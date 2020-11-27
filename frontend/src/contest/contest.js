import React ,{useEffect,useState} from 'react'
import quizesE from '../ide/datajsons/E6.json'
import quizesM from '../ide/datajsons/M6.json'
import quizesH from '../ide/datajsons/H6.json'

import {Link} from 'react-router-dom'
import Tab from 'react-bootstrap/Tab'
import { connect } from 'react-redux'
import { Container, Row,Col,Nav} from 'react-bootstrap'
import { firestoreConnect} from  'react-redux-firebase'
import { compose } from 'redux'
import "./contest.css"
import { Card,Tooltip,Button,OverlayTrigger } from 'react-bootstrap'
import Axios from 'axios'
import $ from 'jquery'

function contest(props) {

  const ques=props.ques; 
  const Live=ques;
  const Past=ques;
  const Future=ques;

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
    			<h1 class="callout">Contests</h1>
        <ul id="tabs">
            <li>
                <a title="Home" href="#first-tab"><i class="fa "></i>Live Contest</a>	        
            </li>
            <li>
                <a title="Photos" href="#second-tab"><i class="fa" ></i>Future Contest</a>	
            </li>
            <li>
                <a title="About" href="#third-tab"><i class="fa "></i>Past Contest</a>	
            </li>			    
            
        </ul>
        <div id="first-tab" class="tab-content">    
        {Live.filter(con_que => con_que.category == "live").map(live=>{
          console.log(1,live)
                  return(
                     <Link to={"/contest/"+live._id}>
                        
                         <h1 class="btn1 -box-sd-effect">{live.title} <br></br> Date: {live.date}  <br></br> Time: {live.time}   </h1> <br></br>
                         
                     </Link>
                  )
                
              })
              }
        </div>
      

        <div id="second-tab" class="tab-content">        
        {Future.filter(con_que => con_que.category == "future").map(future=>{
                return(
                  
                      <Link to={"/contest/"+future._id}>
                      <h1 class="btn1 -box-sd-effect">{future.title} <br></br> Date: {future.date}  <br></br> Time: {future.time}   </h1> <br></br>

                      </Link>
                  
                      
                   
                )
              })}
        </div>

        <div id="third-tab" class="tab-content">        
        {Past.filter(con_que => con_que.category == "past").map(past=>{
                return(
                    <Link to={"/contest/"+past._id}>
                    <h1 class="btn1 -box-sd-effect">{past.title} <br></br> Date: {past.date}  <br></br> Time: {past.time}   </h1> <br></br>

                    </Link>
                )
              })}
        </div>

		</section>	
	</div>

</div>
    
  );
}





export default contest

