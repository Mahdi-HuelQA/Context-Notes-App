import React, { useState } from 'react';
import { Notes } from '../Notes/Notes';
import './DisplaySearchNotes.css'


export const DisplaySearchNotes = ({ notes, handleDelete, tagFilter}) => {

  


  return (
    <div className='display-List' data-testid='displayList' >


      {notes?.map((note) => (
        <Notes className='display-note'  key = { note.id }id={note.id} text={note.text} date={note.date} handleDelete = {handleDelete} />
      ))}
     
    </div>
  );
};

export default DisplaySearchNotes