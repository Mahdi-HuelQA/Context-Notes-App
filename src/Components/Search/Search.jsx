import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css';
import { ThemeContext } from '../../App';

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

  const darkTheme = useContext(ThemeContext);

  return (
    <div className={darkTheme ? 'lightSearch' : 'darkSearch'}>
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
