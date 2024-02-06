import { Component } from 'react';
import axios from 'axios';

import Searchbar from './Serachbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?key=42226095-985f5f3f7d80b9b4b7d7fcb50&image_type=photo&per_page=12'
      )
      .then(({ data }) => {
        const { hits } = data;
        this.setState({ images: hits });
      });
  }
  render() {
    console.log(this.state.images);
    return (
      <>
        <Searchbar />
        <div>
          <ImageGallery>
            <ImageGalleryItem images={this.state.images} />
          </ImageGallery>
        </div>
      </>
    );
  }
}
