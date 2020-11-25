
import {Card,Button} from 'react-bootstrap'
import ani from "./img/aniket.jpeg"
import shri from "./img/shri.jpeg"
import mohit from "./img/mohit.jpeg"
import harsh from "./img/harsh.jpeg"
import "./aboutus.css"
import $ from 'jquery'
import CardDeck from 'react-bootstrap/CardDeck'
import React, { Component } from 'react'

export default class aboutus extends Component {
  render() {

  
    return (
      
        
           <div class="abtcards">
             <CardDeck>
           <Card class="abtcard" style={{ width: '18rem' }}>
            <img  src={ani} class="center"/>
            <Card.Body>
              <Card.Title>Aniket Dhole</Card.Title>
              <div class="abtusdetails">
                          <a className="offset-2" href='https://www.linkedin.com/in/aniket-dhole-6680ab16a/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                          <a className="offset-2" href='https://github.com/aniketdhole07'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                          <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                          </div>
            </Card.Body>
          </Card>
          <Card class="abtcard"  style={{ width: '18rem' }}>
          <img  src={shri} class="center"/>
            <Card.Body>
              <Card.Title>Shrishail Kumbhar</Card.Title>
              <div class="abtusdetails">
              <a className="offset-2" href='https://www.linkedin.com/in/shrishail-kumbhar-554907190'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/shrishail735'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                </div>
            </Card.Body>
          </Card>
          <Card class="abtcard"  style={{ width: '18rem' }}>
          <img  src={mohit} class="center"/>
            <Card.Body>
              <Card.Title>Mohit Gandhi</Card.Title>
              <div class="abtusdetails">
              <a className="offset-2" href='https://www.linkedin.com/in/mohit-gandhi-296255170'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-2" href='https://github.com/MOHIT02082000'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                <a className="offset-2" href='https://www.instagram.com/mgandhi0208/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                </div>
            </Card.Body>
          </Card>
          <Card class="abtcard"  style={{ width: '18rem' }}>
          <img  src={harsh} class="center"/>
            <Card.Body>
              <Card.Title>Harsh Singhal</Card.Title>
              <div class="abtusdetails">
              <a className="offset-2" href='https://www.linkedin.com/in/harsh-singhal-008a091a9'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                 <a className="offset-4" href='https://github.com/harshs-debugger'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                 </div>
            </Card.Body>
          </Card>
          </CardDeck>
           
           

     
            
          </div>
    )
  }
}

{/* const AboutUs=()=>{
  return(
    <div class="container qbody">
    <div class="flex">
      
        <div class="our-team ani">
          <div class="picture">
            <img class="img-fluid" src={ani}/>
          </div>
          <div class="team-content">
            <h3 class="name">Aniket</h3>
            <h4 class="title">Web Developer</h4>
          
          <ul class="social">
          <li><a className="offset-2" href='https://www.linkedin.com/in/aniket-dhole-6680ab16a/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
          <li>  <a className="offset-2" href='https://github.com/aniketdhole07'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a></li>
          <li>   <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>

          </ul>
          </div>
      </div>
          
        <div class="our-team shri">
          <div class="picture">
            <img class="img-fluid" src={shri}/>
          </div>
          <div class="team-content">
            <h3 class="name">Shrishail</h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li><a className="offset-2" href='https://www.linkedin.com/in/shrishail-kumbhar-554907190'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a> </li>
          <li>    <a className="offset-2" href='https://github.com/shrishail735'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a> </li>
          <li>  <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a> </li>

          </ul>
        
      </div>
          
        <div class="our-team mohit">
          <div class="picture">
            <img class="img-fluid" src={mohit}/>
          </div>
          <div class="team-content">
            <h3 class="name">Mohit</h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li>   <a className="offset-2" href='https://www.linkedin.com/in/mohit-gandhi-296255170'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a> </li>
          <li>     <a className="offset-2" href='https://github.com/MOHIT02082000'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a></li>
          <li>   <a className="offset-2" href='https://www.instagram.com/mgandhi0208/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
            
          </ul>
        
      </div>
          
        <div class="our-team harsh">
          <div class="picture">
            <img class="img-fluid" src={harsh}/>
          </div>
          <div class="team-content">
            <h3 class="name">Harsh</h3>
            <h4 class="title">Web Developer</h4>
          </div>
          <ul class="social">
          <li>  <a className="offset-2" href='https://www.linkedin.com/in/harsh-singhal-008a091a9'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a> </li>
          <li>     <a className="offset-4" href='https://github.com/harshs-debugger'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a> </li>
                
       
          </ul>
        
      </div>
    </div>
  </div> */}

      {/* //      <div className="Row box">
      //      <div className="card_abt">
      //        <div class="infooo">
      //          <h1> Developers </h1>
      //           </div>

      //      <Card className="hover abccard"> 
      //      <div className="allimgabtus"> 
      // <img src={ani} alt="aniket" />
      //      </div> 
      //       <Card.Header className="cb"> <h4>Aniket Dhole </h4></Card.Header>
      //       <Card.Body className="ani"> 
      //          <div>
      //            <h6>Student At PCCOE </h6>
      //            <h6> Contact: </h6>
      //            <div className="row">
      //            <a className="offset-2" href='https://www.linkedin.com/in/aniket-dhole-6680ab16a/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
      //            <a className="offset-2" href='https://github.com/aniketdhole07'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
      //           <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      //            </div>
      //          </div>
      //       </Card.Body>
      //      </Card>

      //      </div>
      //      <div className="card_abt">
      //      <Card className="hover"> 


      //              <div> 
      // <img src={shri} alt="Shrishail" />
      //      </div>
            
      //       <Card.Header className="cb"> <h4> Shrishail kumbhar </h4></Card.Header>
      //       <Card.Body className="shri"> 
      //          <div>
      //            <h6>Student At PCCOE </h6>
      //            <h6> Contact: </h6>
      //            <div className="row">
      //            <a className="offset-2" href='https://www.linkedin.com/in/shrishail-kumbhar-554907190'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
      //            <a className="offset-2" href='https://github.com/shrishail735'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
      //           <a className="offset-2" href='https://www.instagram.com/aniketdhole7/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      //            </div>
      //          </div>
      //       </Card.Body>
      //      </Card>
      //      </div>
      //      <div className="card_abt">
      //       <Card className="hover"> 


      //              <div> 
      // <img src={mohit} alt="Mohit" />
      //      </div>
            
      //       <Card.Header className="cb"> <h4> Mohit Gandhi </h4></Card.Header>
      //       <Card.Body className="mg"> 
      //          <div>
      //            <h6>Student At PCCOE </h6>
      //            <h6> Contact: </h6>
      //            <div className="row">
      //            <a className="offset-2" href='https://www.linkedin.com/in/mohit-gandhi-296255170'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
      //            <a className="offset-2" href='https://github.com/MOHIT02082000'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
      //           <a className="offset-2" href='https://www.instagram.com/mgandhi0208/'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
      //            </div>
      //          </div>
      //       </Card.Body>
      //      </Card>
      //     </div>
      //     <div className="card_abt">
      //     <Card className="hover"> 

      //      <div> 
      // <img src={harsh} alt="Harsh" />
      //      </div> 
      //       <Card.Header className="cb"> <h4>Harsh Singhal</h4></Card.Header>
      //       <Card.Body className="hs"> 
      //          <div>
      //            <h6>Student At PCCOE </h6>
      //            <h6> Contact: </h6>
      //            <div className="row">
      //            <a className="offset-2" href='https://www.linkedin.com/in/harsh-singhal-008a091a9'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
      //            <a className="offset-4" href='https://github.com/harshs-debugger'><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
                
      //            </div>
      //          </div>
      //       </Card.Body>
      //      </Card>
      //      </div>
      //      </div>
           

   
     
    )
}

export default AboutUs; */}