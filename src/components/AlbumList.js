import React, { Component } from 'react';
import { ScrollView, YellowBox } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {

    //Declare initial state
    //albums piece of state, and an empty array to start off
    state= { albums: [] };


  componentWillMount() {
     axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
  }

renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} propName={album} />);
}

  render() {
      console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}


YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

export default AlbumList;
