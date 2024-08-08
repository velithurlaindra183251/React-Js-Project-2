import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} >
      <input type="text" className='searchtop' placeholder="Enter the title" style={{ backgroundColor: "lightgray" }} value={query} onChange={handleQueryChange} />
      <button type="submit" className='submittop' style={{ backgroundColor: "lightgray" }}>Search</button>
    </form>
  );
};

export default SearchFilter;
