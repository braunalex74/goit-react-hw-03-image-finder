import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots color="#2cde3e" height={80} width={80} />
    </div>
  );
};

export default Loader;
