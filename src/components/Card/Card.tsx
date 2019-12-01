import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  image?: string;
  link: string;
  preview: string;
};

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        { this.props.image !== undefined && <img src={this.props.image} alt="" /> }
        <h2>{this.props.title}</h2>
        <p>{this.props.preview}</p>
      </div>
    )
  }
}
