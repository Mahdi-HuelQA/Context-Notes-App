import React,{useContext} from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Notes.css'
import { ThemeContext } from '../../App';

export const Notes = ({ id, text, date, tag, handleDelete,photo }) => {

  const darkTheme = useContext(ThemeContext);


 
// // Fetch request for notes
// async function fetchText() {
//   console.log('fetching');
//   let response = await fetch('http://localhost:8000');
//   let data = await response.json();
  
//   console.log(data);
// }


  return (
    <div className={ darkTheme ? "lightNote" : "darkNote"} data-testid='notes'>
      <span  className='text-block'>{text} </span>
      <div className='note-footer'>
        <small className='small-date'>{date}</small>      <small className='small-tag'>Tag: {tag}</small>
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
      {/* <button onClick={ ()=>fetchText()}>Test</button> */}
      {/* <img src= {photo} alt = "note"/> */}
    </div>
  );
};

//test delete button is here and working (2)

