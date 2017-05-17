import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: true,
      showLongInputWarning: false,
      showShortInputWarning: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    console.log("value length", value.length)
    if (value.length < 17 && value.length >= 1) {
      this.setState({
        inputValue: value,
        disabled: false,
        showLongInputWarning: false,
        showShortInputWarning: false
      });
    } else if (value.length === 0) {
      console.log("INSIDE ELSE IF", value.length)
      this.setState({
        inputValue: value,
        disabled: true,
        showShortInputWarning: true
      });
    } else {
      this.setState({
        inputValue: value,
        disabled: true,
        showLongInputWarning: true
      });
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
        disabled={this.state.disabled}
        showLongInputWarning={this.state.showLongInputWarning}
        showShortInputWarning={this.state.showShortInputWarning}
        />
    );
  }
}
