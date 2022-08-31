import { MdSearch } from 'react-icons/md';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import './TagSearch.css'

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
  
  return (
    <div className={ darkTheme ? "lightTag" : "darkTag"}>
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
