

import { Link } from 'react-router-dom';

import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
export default class home extends Component {
    render() {
        return (<div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/pKRxmNC/download-1.png" 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Live Contest</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/pKRxmNC/download-1.png"
      alt="Second  slide"
    />

    

    <Carousel.Caption>
      <h3>Future Contest</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Jumbotron>
  <h1>Hello, Folks!</h1>
  <p>
    Welcome all to our site PeerCode, we have lots of exciting events coming up and glad you are here to learn 
    and explore new things along with us...
  </p>
  
  
</Jumbotron>
            </div>
        )
    }
}
