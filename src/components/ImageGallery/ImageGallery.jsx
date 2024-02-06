import { Component } from 'react';

import css from './ImagineGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
  };

  render() {
    const { images } = this.state;
    const elements = images.map(({ id, webformatURL }) => (
      <li key={id}>
        <img src={webformatURL} alt="ПІШОВ НАХУЙ" />
      </li>
    ));
    return <ul className={css.ImageGallery}>{elements}</ul>;
  }
}

export default ImageGallery;
