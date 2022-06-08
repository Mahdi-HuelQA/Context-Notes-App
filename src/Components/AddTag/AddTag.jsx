import React, { useState, useContext } from 'react';
import { GoPlus } from "react-icons/go";
import { ThemeContext } from '../../App';


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

  // add reset to empty string functionality
  return (
    <div style = {themeStyles} data-testid='add'>
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
