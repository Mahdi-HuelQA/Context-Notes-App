import React from 'react';
import { TagSearch } from '../TagSearch/TagSearch';
import { Search } from '../Search/Search';
import { AddTag } from '../AddTag/AddTag';
import './Header.css'

export const Header = () => {
  
  return (
    <div className='Header'>
    
      <Search />
      <TagSearch />
      <AddTag />
    </div>
  );
};
