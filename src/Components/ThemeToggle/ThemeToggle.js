import React, { useState,useContext } from 'react';
import { BsFillSunFill, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../App';

const ThemeToggle = ({ toggleTheme }) => {
  const [theme, setTheme] = useState(true);

  const toggle = () => {
    setTheme((prevTheme) => !prevTheme);
    console.log(theme);
  };
  const toggleHandler = () => {
    toggleTheme();
    toggle();
  };

  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ?  '#333' : '#ccc',
    color: darkTheme ? '#f58523' : '#0b0b0b',
    marginTop: '17px'
    
  };

  return (
    <div >
      {theme ? (
        <BsSun  style = {themeStyles} onClick={toggleHandler}></BsSun>
      ) : (
        <BsFillSunFill style = {themeStyles} onClick={toggleHandler}></BsFillSunFill>
      )}
    </div>
  );
};

export default ThemeToggle;
