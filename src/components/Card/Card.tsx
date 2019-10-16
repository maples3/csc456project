import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src='https://anthonymapes.com/~anthony/overviewer/mapes-overworld-day-ne/base.png' />
        <h2>Card</h2>
        <p>This is a card</p>
      </div>
    )
  }
}
