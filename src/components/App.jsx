import { Component } from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    images: [],
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
      </div>
    );
  }
}
