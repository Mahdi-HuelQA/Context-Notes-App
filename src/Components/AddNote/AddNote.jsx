import React from 'react';
import './AddNote.css';
import { useState } from 'react';

export const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit  = 200;


  const handleChange = (event) => {
if (characterLimit - event.target.value.length >= 0) {
    setNoteText(event.target.value);
    console.log("handle change")
  }};

  const handleSaveClick = () => {
    if (noteText.trim().length > 0){
    handleAddNote(noteText)
    }setNoteText(' ')
    console.log("handle save")
   }
  return ( 
    <div className=' noteNew'>
      <textarea
        rows='8'
        cols='10'
        placeholder='type to add a new note'
        value = {noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small> {characterLimit - noteText.length} remaining</small>
        <button className='save' onClick={handleSaveClick}> Save</button>
      </div>
    </div>
  );
};

