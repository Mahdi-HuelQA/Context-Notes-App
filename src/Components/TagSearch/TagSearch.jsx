import { MdSearch } from 'react-icons/md';
import React, { useState } from 'react';

export const TagSearch = ({tagFilter}) => {
  
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      setSearch(e.target.value);
      // console.log(search);
    };
  
    const performSearch = () => {
      tagFilter(search);
      console.log('Tag component!');
      setSearch("")
    };
    return (
      <div className='search'>
        <MdSearch className='search-icons' size='1.3em' />
        <input type='text' placeholder='type to search' value = {search} onChange={handleSearch} />
        <button className='btn-search' onClick={performSearch}>
          Search Tag
        </button>
      </div>
    );
}
