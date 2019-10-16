import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

export default class CardList extends Component {
  render() {
    return (
      <div className="cardList">
          <Card></Card>
          <Card></Card>
      </div>
    )
  }
}
