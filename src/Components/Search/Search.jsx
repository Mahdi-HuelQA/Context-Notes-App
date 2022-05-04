import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css';

export const Search = ({ searchFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const performSearch = () => {
    searchFilter(search);
    console.log('search!!');
    setSearch('');
  };
  return (
    <div className='Search'>
      <MdSearch className='search-icons' size='1.3em' />
      <input
        type='text'
        placeholder='Type to search'
        value={search}
        onChange={handleSearch}
      />
      <button className='btn-search' onClick={performSearch}>
        Search
      </button>
    </div>
  );
};


//test button renders on page and works (2)