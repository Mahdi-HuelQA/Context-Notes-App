import React, { useState } from 'react';


export const AddTag = ({ updateTagsList }) => {
  const [createTag, setCreateTag] = useState('');

  const handleSearch = (e) => {
    setCreateTag(e.target.value);
  };

  const performSearch = () => {
    updateTagsList(createTag);
    console.log('Tag updated');
    setCreateTag("")
  };

  // add reset to empty string functionality
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='type to search'
        value={createTag}
        onChange={handleSearch}
      />
      <button className='btn-search' onClick={performSearch}>
        add Tag
      </button>
    </div>
  );
};
