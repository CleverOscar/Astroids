import React, { Component } from 'react'
// Astroid Component is the Parent Component
//
// Child Component
import Ship from './assets/Ship.js';
//
//
class Astroids extends Component {
  constructor(){
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0
      }

    }

  handleScreenSize(value, e){
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1
      }
    });
  }



  render(){
    return(
      <div>
        Astroids

        <Ship />
      </div>
    )
  }
}

export default Astroids;
