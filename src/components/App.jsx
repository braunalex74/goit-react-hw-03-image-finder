import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './utils/Button';
import { Loader } from './utils/Loader';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    modalImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;
    if (
      prevState.currentPage !== currentPage ||
      prevState.searchQuery !== searchQuery
    ) {
      this.fetchImages();
    }
  }

  handleSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleImageClick = imageUrl => {
    this.setState({
      modalImageUrl: imageUrl,
      showModal: true,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    fetchImages(searchQuery, currentPage)
      .then(newImages => {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      modalImageUrl: '',
    });
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
              disabled={isLoading}
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
