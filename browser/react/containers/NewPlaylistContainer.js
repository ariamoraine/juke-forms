import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    if (value.length > 0 && value.length < 17) {
      console.log()
      this.setState({
        inputValue: value,
        disabled: false
      });
    } else {
      this.setState({
        inputValue: value,
        disabled: true
      })
    }
  }

  handleSubmit (event) {
    console.log(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render () {
    return (
      <NewPlaylist
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        value={this.state.inputValue}
        disabled={this.state.disabled} />
    )
  }
}
