import React from 'react';
import shuffle from 'shuffle-array';
import Box from './Box';
import Nav from './Nav';
// Card States:
// Hiding : Currently Hidden
// showing : Is being displayed
// Match : Matches with the previously clicked one
const CardState = {
  HIDE: 0,
  SHOW: 1,
  MATCH: 2
}
// Important point to remember
// The cards array is first created and than passed into state. If you create cards after the state and than link them to state changes
// That will adversely affect your application
class Generator extends React.Component{
  constructor(props){
    super(props);
    let cards = [
      {id: 0, cardState: CardState.HIDE, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDE, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDE, backgroundColor: 'green'},
      {id: 3, cardState: CardState.HIDE, backgroundColor: 'green'},
      {id: 4, cardState: CardState.HIDE, backgroundColor: 'blue'},
      {id: 5, cardState: CardState.HIDE, backgroundColor: 'blue'},
    ]
    cards = shuffle(cards);
    this.state = {cards, noClick: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }
  handleNewGame(){
    let cards = this.state.cards.map((c)=>({
      ...c,
      cardState: CardState.HIDE
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }
  handleClick(id){
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(c => {
        if(idsToChange.includes(c.id)){
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    }

    const foundCard = this.state.cards.find(c => c.id === id);
    if(this.state.noClick || foundCard.cardState !== CardState.HIDE){
      return;
    } //This is to safeguard match by clicking on same box twice
    let noClick = false;
    let cards = mapCardState(this.state.cards, [id], CardState.SHOW);
    let showingCards = cards.filter((c) => c.cardState === CardState.SHOW);
    let ids = showingCards.map(c => c.id);
    console.log(showingCards);
    if(showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor){
      cards = mapCardState(cards, ids, CardState.MATCH);
    }else if(showingCards.length === 2){
      let hidingCards = mapCardState(cards, ids, CardState.HIDE);
      noClick = true;
      this.setState({cards, noClick}, ()=>{
        setTimeout(()=>{
          this.setState({cards: hidingCards, noClick:false});
        },1300);
      });
      return;
    }
    this.setState({cards, noClick});
  }
  render(){
    const cards =  this.state.cards.map((card)=>(
      <Box
      key={card.id}
      showing={card.cardState !== CardState.HIDE}
      backgroundColor={card.backgroundColor}
      onClick={() => this.handleClick(card.id)}
      />
    ));
    return (
      <div>
      <Nav onNewGame = {this.handleNewGame} />
      {cards}
      </div>
    )
  }
}
export default Generator;
