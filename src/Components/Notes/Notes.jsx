import React,{useContext} from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Notes.css'
import { ThemeContext } from '../../App';

export const Notes = ({ id, text, date, tag, handleDelete,photo }) => {

  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : 'white',
    color: darkTheme ?  'white' : '#0b0b0b',
    minHeight:  '170px',
    padding: '1rem',
    borderRadius:  '10px',
    borderWidth:  '1px',
    display: 'flex',
    flexDirection:  'column',
    justifyContent:  'space-between',
    whiteSpace:  'pre-wrap',
    overflow: 'break-word',
    fontFamily:  'Roboto sans-serif',
    fontWeight: '500',
    border: '1px solid #ececec',
    borderStyle:  'solid',
  };
  return (
    <div style={themeStyles} data-testid='notes'>
      <span  className='text-block'>{text} </span>
      <div className='note-footer'>
        <small>{date}</small>      <small>Tag: {tag}</small>
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
      {/* <img src= {photo} alt = "note"/> */}
    </div>
  );
};

//test delete button is here and working (2)

