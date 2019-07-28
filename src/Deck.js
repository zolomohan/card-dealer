import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card';
import './Deck.css'

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

export default class Deck extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       deck: null,
       drawn:[],
       loading: false
    }
  }

  async componentDidMount(){
    let deckResponse = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
    this.setState({deck: deckResponse.data, drawn: []})
  }

  getCard = async () => {
    try{
      this.setState({loading: true});
      let cardResponse = await axios.get(`${API_BASE_URL}/${this.state.deck.deck_id}/draw/?count=1`);
      if(!cardResponse.data.success)
        throw new Error ('No more cards availabale in the deck!');
      let card = cardResponse.data.cards[0];
      this.setState(currentState => ({
        drawn: [
          ...currentState.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`
          },
        ],
        loading: false
      }))
    }
    catch(error){
      this.setState({loading: false});
      alert(error);
    }
  }

  render() {
    return (
      <div className='Deck'>
        <h1> 
            <span className='Deck-icons Deck-black-club'>&spades;</span> <span className='Deck-icons Deck-red-club'>&hearts;</span> <span className='Deck-icons Deck-black-club'>&clubs;</span> <span className='Deck-icons Deck-red-club'>&diams;</span> Card Dealer <span className='Deck-icons Deck-red-club'>&diams;</span> <span className='Deck-icons Deck-black-club'>&clubs;</span> <span className='Deck-icons Deck-red-club'>&hearts;</span> <span className='Deck-icons Deck-black-club'>&spades;</span>
        </h1>
        <button onClick = {this.getCard} disabled = {this.state.loading}>Get Card</button>
        <div className='Deck-cards'>
          {this.state.drawn.map(card => <Card key={card.id} imageUrl = {card.image} name = {card.name} />)}
        </div>
      </div>
    )
  }
}
