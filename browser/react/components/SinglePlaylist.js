import React, { Component } from 'react';

export default class SinglePlaylist extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
  }

  render() {
    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}
