import React, { Component } from 'react'
import axios from 'axios'

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

export default class Deck extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             deck: null
        }
    }

    async componentDidMount(){
        let deckResponse = await axios.get(API_URL);
        this.setState({deck: deckResponse.data})
    }

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
            </div>
        )
    }
}
