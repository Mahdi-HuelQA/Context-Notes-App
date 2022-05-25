import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Notes.css'

export const Notes = ({ id, text, date, handleDelete }) => {
  return (
    <div className='note' data-testid='notes'>
      <span  className='text-block'>{text} </span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
    </div>
  );
};

//test delete button is here and working (2)

