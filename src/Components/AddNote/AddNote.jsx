import React from 'react';
import './AddNote.css';
import { useState } from 'react';
import { DropDown } from '../Dropdown/DropDown';

export const AddNote = ({handleAddNote, handleTag, updateTagsList, tagsList}) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit  = 200;


  const handleChange = (event) => {
if (characterLimit - event.target.value.length >= 0) {
    setNoteText(event.target.value);
    console.log("handle change")
  }};

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 ) {
    handleAddNote(noteText)
    }setNoteText(' ')
    console.log("handle save")
   }

   const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === "Enter" || e.keyCode === 13) {
   console.log("Enter Clicked!")
   handleSaveClick()
  
   

  }}



  return ( 
    <div className=' noteNew'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a new note'
        value = {noteText}
        onChange={handleChange}
        onKeyDown={handleKeypress}
      ></textarea>
      <div className='note-footer'>
        <small> {characterLimit - noteText.length} remaining</small>
        <button className='save' onClick={handleSaveClick} > Save</button>
        <DropDown  handleTag= {handleTag} updateTagsList = {updateTagsList} tagsList = {tagsList} />
      </div>
    </div>
  );
};

