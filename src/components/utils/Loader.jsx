import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <ThreeDots color="#2cde3e" height={80} width={80} />
      </div>
    </LoaderContainer>
  );
};

export default Loader;
