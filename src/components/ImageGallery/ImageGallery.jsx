import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
