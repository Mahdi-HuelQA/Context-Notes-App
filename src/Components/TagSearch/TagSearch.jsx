import { MdSearch } from 'react-icons/md';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';

export const TagSearch = ({ tagFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const performSearch = () => {
    tagFilter(search);
    console.log('Tag component!');
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
      <button
        className='btn-search'
        data-testid='tagSearch'
        label='Search Tag'
        onClick={performSearch}
      >
        Search Tag
      </button>
    </div>
  );
};

//test button renders on page and works (2)
