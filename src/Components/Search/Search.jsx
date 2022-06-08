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
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#f58523',
    margin: "1px",
    marginBottom:  "5px",
    padding: "5px",
    borderRadius:"15px",
    alignItems: "center",
    marginTop: "5px"
  };
  return (
    <div style = {themeStyles}>
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