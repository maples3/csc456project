import React from 'react';
import { connect } from 'react-redux';
import { IAppState, ICard } from '../../types/state';
import Card from '../Card/Card';
import './CardList.css';

interface CardListProps {
  cards: ICard[];
};

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <div className="cardList">
        {
          this.props.cards.map((value) => <Card key={value.title} title={value.title} link={value.link} preview={value.preview} image={value.image} />)
        }
      </div>
    )
  }
};

function mapStateToProps(state: IAppState): CardListProps {
  return { cards: state.cards };
}

export default connect(mapStateToProps)(CardList);
