import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #1dd62d;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <ThreeDots color="#2cde3e" height={80} width={80} />
      </LoaderSpinner>
    </LoaderContainer>
  );
};

export default Loader;
