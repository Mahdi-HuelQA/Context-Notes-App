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
  const themeStyles = {
    backgroundColor: darkTheme ?   '#333':'#ccc',
    color: darkTheme ? '#ccc': '#ccc', 
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5px',
    borderRadius: '10px',
    justifyContent: 'space-evenly',
  };

  /* background-color: #4297A0; */

  return (
    <div style = {themeStyles}>
    <Profile/>
      <Search searchFilter={searchFilter} />
      <TagSearch tagFilter={tagFilter} />
      <AddTag updateTagsList={updateTagsList} />
      <ThemeToggle toggleTheme={toggleTheme}/>
    </div>
  );
};
