import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Header, SearchButton } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">
          <span className="button-label">Search</span>
        </SearchButton>
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
