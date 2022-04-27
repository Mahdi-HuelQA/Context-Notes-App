import React from 'react';
import { Notes } from '../Notes/Notes';
import { AddNote } from '../AddNote/AddNote';
import './notesList.css';

export const NotesList = ({ notes,handleAddNote, handleDelete, handleTag, updateTagsList, tagsList}) => {
  return (
    <div className='notes-List'>
      {notes.map((note) => (
        <Notes key = { note.id }id={note.id} text={note.text} date={note.date} handleDelete = {handleDelete} />
      ))}
      <AddNote handleAddNote = {handleAddNote} handleTag = {handleTag} updateTagsList = {updateTagsList} tagsList = {tagsList} />
    </div>
  );
};
