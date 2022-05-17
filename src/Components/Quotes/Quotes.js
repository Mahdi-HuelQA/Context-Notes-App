import React from 'react';
import { useState } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [num, setNum] = useState(2);

  //fetch Quotes
const calc = () => {
 return setNum( Math.floor(Math.random() * 100) + 1)
 }
 
//  calc()
//breaks app
  async function fetchText() {
    
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.json();
    setQuote(data[num]);
    console.log(data[3].text);
  }

  fetchText();

  return (
    <div id='container'>
      {/* <header>
    <h1>Animated Photo Banner</h1>
    <p>Lorem ipsum dolor...</p>
  </header> */}

      <div class='photobanner'>
        <span class='first'>{quote.text} </span>
      
      </div>
    </div>
  );
};

export default Quotes;
