import React, { Component } from 'react'
import './profile.css'
import Card from 'react-bootstrap/Card'
export default class profile extends Component {
    render() {
        return (
            <div class="profilediv">
                
                <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.email}</Card.Subtitle>
                
                
            </Card.Body>
            </Card>
            </div>
        )
    }
}
