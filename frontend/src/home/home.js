import { Link } from 'react-router-dom';

import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'
import './home.css'

import $ from 'jquery'
export default class home extends Component {



    render() {
      
      (function ($) {
        $.fn.countTo = function (options) {
          options = options || {};
          
          return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
              from:            $(this).data('from'),
              to:              $(this).data('to'),
              speed:           $(this).data('speed'),
              refreshInterval: $(this).data('refresh-interval'),
              decimals:        $(this).data('decimals')
            }, options);
            
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;
            
            // references & variables that will change with each update
            var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data('countTo') || {};
            
            $self.data('countTo', data);
            
            // if an existing interval can be found, clear it first
            if (data.interval) {
              clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            
            // initialize the element with the starting value
            render(value);
            
            function updateTimer() {
              value += increment;
              loopCount++;
              
              render(value);
              
              if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
              }
              
              if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;
                
                if (typeof(settings.onComplete) == 'function') {
                  settings.onComplete.call(self, value);
                }
              }
            }
            
            function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.html(formattedValue);
            }
          });
        };
        
        $.fn.countTo.defaults = {
          from: 0,               // the number the element should start at
          to: 0,                 // the number the element should end at
          speed: 1000,           // how long it should take to count between the target numbers
          refreshInterval: 100,  // how often the element should be updated
          decimals: 0,           // the number of decimal places to show
          formatter: formatter,  // handler for formatting the value before rendering
          onUpdate: null,        // callback method for every time the element is updated
          onComplete: null       // callback method for when the element finishes updating
        };
        
        function formatter(value, settings) {
          return value.toFixed(settings.decimals);
        }
      }($));
      
      $(function ($) {
        // custom formatting example
        $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
        });
        
        // start all the timers
        $('.timer').each(count);  
        
        function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
        }
      });
        return (<div>
          <div data-aos="zoom-in">
            <Carousel className="allcaro">
            
            
  <Carousel.Item className="algcaro">
    <img
      className="d-block w-100 imgsiz"
      src="https://i.ibb.co/qyqpFVh/caro1.png" 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carotext">Live Contest</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgsiz"
      src="https://i.ibb.co/k0vz4RY/Whats-App-Image-2020-11-24-at-11-09-47-PM.jpg"
      alt="Second  slide"
    />

    

    <Carousel.Caption>
      <h3>Future Contest</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgsiz"
      src="https://i.ibb.co/9rKdmDX/Whats-App-Image-2020-11-24-at-11-08-58-PM.jpg"
      alt="Second  slide"
    />

    

    <Carousel.Caption>
      <h3>Past Contest</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<Jumbotron class="siteinfo " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
  <h1>Hello, Folks!</h1>
  <p>
    Welcome all to our site PeerCode, we have lots of exciting events coming up and glad you are here to learn 
    and explore new things along with us...
  </p>
  
  
</Jumbotron>
<div className="liveleadboard">



<div class="wrapper">
<h1>LIVE DATA</h1>
<div className="alglive">
    <div class="counter col_fourth">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="13" data-speed="1500"></h2>
       <p class="count-text ">Total Questions</p>
    </div>

    <div class="counter col_fourth">
      <i class="fa fa-coffee fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="9" data-speed="1500"></h2>
      <p class="count-text ">Total Users</p>
    </div>

    <div class="counter col_fourth">
      <i class="fa fa-lightbulb-o fa-2x"></i>
      <h2 class="timer count-title count-number" data-to="2" data-speed="1500"></h2>
      <p class="count-text ">Total Competitions Hosted</p>
    </div>
    </div>
 
</div>
<div data-aos="zoom-out-left">
<Card style={{ width: '18rem' }}>
  <Card.Header>Leaderboard Top 3</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Aniket</ListGroup.Item>
    <ListGroup.Item>Mohit</ListGroup.Item>
    <ListGroup.Item>Shrishail</ListGroup.Item>
  </ListGroup>
</Card>
</div>
</div>
<div className="tm">
<Carousel>
  <Carousel.Item>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  </Carousel.Item>
</Carousel>
</div>


  {/* footer */}
  

  
  
  
  
  </div>
        )
    }
}
                                                                                                                              
{/*

<Carousel data-aos="zoom-in-down" className="carosiz_tm">
  <Carousel.Item interval={1000}>
  <CardColumns>
  <div className="algtestimonial">
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  </div>
</CardColumns>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <CardColumns>
  
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  
</CardColumns>
  </Carousel.Item>

  
  <Carousel.Item>
  <CardColumns>
  

  
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

 
</CardColumns>
  </Carousel.Item>
</Carousel> */}
