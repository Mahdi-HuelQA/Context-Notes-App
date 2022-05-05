import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";


export const AddTag = ({ updateTagsList }) => {
  const [createTag, setCreateTag] = useState('');

  const handleSearch = (e) => {
    setCreateTag(e.target.value);
  };

  const performSearch = () => {
    updateTagsList(createTag);
    console.log('Tag updated');
    setCreateTag('');
  };

  // add reset to empty string functionality
  return (
    <div className='Search' data-testid='add'>
    <GoPlus className='search-icons' size='1.3em' />
      <input
        type='text'
        placeholder='Type to add'
        value={createTag}
        onChange={handleSearch}
      />
      <button className='btn-search' onClick={performSearch}>
      Add Tag
      </button>
    </div>
  );
};
