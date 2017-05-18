import React, { Component } from 'react';
import Songs from './Songs';
import AddSong from './addSong';

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

  componentWillReceiveProps (nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId){
      selectPlaylist(nextPlaylistId);
    }
  }

  render() {
    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={this.props.selectedPlaylist.songs} />
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
        <AddSong />
      </div>
    );
  }
}
