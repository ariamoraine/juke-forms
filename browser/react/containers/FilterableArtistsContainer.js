//react things
import React, { Component } from 'react';

//components
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component{

  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput (event) {
    const value = event.target.value
    this.setState({
      inputValue: value
    });
  }

  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => {
      return artist.name.match(inputValue);
      });

    return (
      <div>
        <FilterInput handleInput={this.handleInput} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}
