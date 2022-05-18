import React from 'react';
import { useState, useEffect } from 'react';
import './Quotes.css';

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

  return (
    <div id='container'>
      <div class='photobanner'>
        <span class='first'>{quote.text} </span>
      </div>
    </div>
  );
};

export default Quotes;
