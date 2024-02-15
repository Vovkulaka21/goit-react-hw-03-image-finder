import css from './App.module.css';

import { Component } from 'react';
import { imageGallery, searchImages } from 'api/gallery';

import Searchbar from './Serachbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { data } = await imageGallery(this.state.page);
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
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    if (search && search !== prevState.search) {
      this.setState({
        loading: true,
      });
      try {
        const { data } = await searchImages(search, page);
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
    }
  }

  handleSearch = ({ search }) => {
    this.setState({
      search,
    });
  };

  pageRiser = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <div className={css.app_box}>
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.loading && <Loader />}
          {Boolean(this.state.images.length) && (
            <ImageGallery>
              <ImageGalleryItem images={this.state.images} />
            </ImageGallery>
          )}
          {Boolean(this.state.images.length) && (
            <Button onClick={this.pageRiser} />
          )}
        </div>
      </>
    );
  }
}
