import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './Quotes.css';
import { ThemeContext } from '../../App';


const Quotes = () => {
  const [quote, setQuote] = useState([]);

  //fetch Quotes
  const calc = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  //  calc()
  //useeffect fixed infinite loop of re-rendering component

  useEffect(() => {
    fetchText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchText() {
    console.log('fetching');
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.json();
    setQuote(data[calc()]);
    console.log(data[3].text);
  }

  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : 'whitesmoke',
    color: darkTheme ?  '#f58523' : '#333',
  width: '960px',
  overflow: 'hidden',
  margin: '10px auto',
  // backgroundColor: 'whitesmoke',
  borderRadius: '10%',
  height: '30px',
  fontStyle: 'italic',
  fontWeight: '400',
  textShadow: '2px',
  };

  return (
    <div style = {themeStyles}>
      <div class='photobanner'>
        <span class='first'>{quote.text} </span>
      </div>
    </div>
  );
};

export default Quotes;
