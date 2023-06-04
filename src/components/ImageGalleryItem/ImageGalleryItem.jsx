import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem, PictureWrapper, Picture } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, onClick } = this.props;

    return (
      <ListItem onClick={onClick}>
        <PictureWrapper>
          <Picture src={imageUrl} alt="" />
        </PictureWrapper>
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
