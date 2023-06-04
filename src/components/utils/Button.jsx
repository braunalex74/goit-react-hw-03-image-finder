import React from 'react';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { ButtonMov } from './Button.styled';

export const Button = ({ onClick, isLoading, hasMoreImages }) => {
  if (!hasMoreImages) {
    return null;
  }

  return (
    <div>
      <ButtonMov onClick={onClick} disabled={isLoading}>
        {isLoading ? (
          <ThreeDots color="#ffffff" height={15} width={40} />
        ) : (
          'Load More'
        )}
      </ButtonMov>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMoreImages: PropTypes.bool.isRequired,
};

export default Button;
