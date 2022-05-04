import React from 'react';
import { TagSearch } from '../TagSearch/TagSearch';
import { Search } from '../Search/Search';
import { AddTag } from '../AddTag/AddTag';
import './Header.css'

export const Header = ({tagFilter, searchFilter, updateTagsList}) => {
  
  return (
    <div className='Header'>
    
      <Search searchFilter={searchFilter}/>
      <TagSearch tagFilter={tagFilter} />
      <AddTag updateTagsList = {updateTagsList}/>
    </div>
  );
};
