import React from 'react';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalContent } from './Modal.styled';

export const Modal = ({ imageUrl, onClose }) => {
  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <ModalOverlay onClick={handleCloseModal} onKeyDown={handleKeyDown}>
      <ModalContent>
        <img src={imageUrl} alt="" />
      </ModalContent>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
