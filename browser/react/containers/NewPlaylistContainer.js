import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    console.log("INSIDE HANDLE CHANGE VALUE", value);
    this.setState({
      inputValue: value
    });
  }

  handleSubmit (event) {
    console.log("INside handle SUBMIT")
    const subValue = event.target.value;
    console.log(this.state.inputValue, subValue);
  }

  render () {
    return (
      <NewPlaylist handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    )
  }
}
