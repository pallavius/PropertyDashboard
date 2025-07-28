import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(PropertyContext);
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search properties..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar; 