import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, PictureWrapper, Picture } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageUrl, onClick }) => (
  <ListItem onClick={onClick}>
    <PictureWrapper>
      <Picture src={imageUrl} alt="" />
    </PictureWrapper>
  </ListItem>
);

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
