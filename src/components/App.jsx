import { Component } from 'react';
import { imageGallery } from 'api/gallery';

import Searchbar from './Serachbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { data } = await imageGallery();
      const { hits } = data;
      this.setState({
        images: hits?.length ? hits : [],
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({ loading: false });
    }

    // imageGallery()
    //   .then(({ data }) => {
    //     const { hits } = data;
    //     this.setState({
    //       images: hits?.length ? hits : [],
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({
    //       error: error.message,
    //     });
    //   })
    //   .finally(() => {
    //     this.setState({ loading: false, });
    //   });
  }
  render() {
    return (
      <>
        <Searchbar />
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.loading && <Loader/>}
          <ImageGallery>
            <ImageGalleryItem images={this.state.images} />
          </ImageGallery>
        </div>
      </>
    );
  }
}
