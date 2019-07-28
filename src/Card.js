import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.state.cardImgUrl} />
            </div>
        )
    }
}
