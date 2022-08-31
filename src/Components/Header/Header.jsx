import React, { useContext } from 'react';
import { TagSearch } from '../TagSearch/TagSearch';
import { Search } from '../Search/Search';
import { AddTag } from '../AddTag/AddTag';
import './Header.css';
import { ThemeContext } from '../../App';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Profile from '../Authentication/Profile/Profile';

export const Header = ({ tagFilter, searchFilter, updateTagsList,toggleTheme }) => {
  const darkTheme = useContext(ThemeContext);
  

  
  return (
    <div className={ darkTheme ? "lightHeader" : "darkHeader"}>
    <Profile/>
      <Search searchFilter={searchFilter} />
      <TagSearch tagFilter={tagFilter} />
      <AddTag updateTagsList={updateTagsList} />
      <ThemeToggle toggleTheme={toggleTheme}/>
    </div>
  );
};
