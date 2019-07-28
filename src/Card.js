import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor(props){
  	super(props);
    this._transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 90 - 45}deg)`;
  }

  render() {  
    return (
      <img 
        style = {{
          transform: this._transform
        }}
        className="Card" 
        src = {this.props.imageUrl} 
        alt = {this.props.name} 
      />
    )
  }
}
