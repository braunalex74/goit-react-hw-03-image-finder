import React, { Component } from 'react';
import axios from 'axios';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './utils/Button';
import { Loader } from './utils/Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    modalImageUrl: '',
  };

  componentDidMount() {
    if (this.state.searchQuery) {
      this.fetchImages();
    }
  }

  handleSubmit = query => {
    this.setState(
      {
        searchQuery: query,
        images: [],
        currentPage: 1,
      },
      this.fetchImages
    );
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      }),
      this.fetchImages
    );
  };

  handleImageClick = imageUrl => {
    this.setState({
      modalImageUrl: imageUrl,
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      modalImageUrl: '',
    });
  };

  fetchImages = async () => {
    const { searchQuery, currentPage } = this.state;

    try {
      this.setState({
        isLoading: true,
      });

      const response = await axios.get(
        `https://pixabay.com/api/?key=${'35196803-673541e2c14d14661bda49ca7'}&q=${searchQuery}&page=${currentPage}&per_page=12`
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  render() {
    const { images, isLoading, showModal, modalImageUrl } = this.state;
    const hasMoreImages = images.length % 12 === 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <Button
              onClick={this.handleLoadMore}
              isLoading={isLoading}
              hasMoreImages={hasMoreImages}
            >
              Load More
            </Button>
          </div>
        )}
        {showModal && (
          <Modal imageUrl={modalImageUrl} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
