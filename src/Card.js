import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <img src = {this.props.imageUrl} alt = {this.props.name} />
        )
    }
}
