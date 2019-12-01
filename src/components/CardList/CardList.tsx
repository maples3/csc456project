import React from 'react';
import { connect } from 'react-redux';
import { IAppState, IArticle } from '../../types/state';
import Card from '../Card/Card';
import './CardList.css';
import LoadButton from '../LoadButton/LoadButton';

interface CardListProps {
  cards: IArticle[];
};

class CardList extends React.Component<CardListProps> {
  render() {
    
    let elements = this.props.cards.map((value) => (<Card key={value.title} title={value.title} link={value.link} preview={value.preview} image={value.image} />))
    console.log("Elements: " + elements.length);
    
    return (
      <div className="cardList">
        <div>
          { elements }
        </div>
        <LoadButton />
      </div>
    );
  }
};

function mapStateToProps(state: IAppState): CardListProps {
  return { cards: state.cards };
}

export default connect(mapStateToProps)(CardList);
