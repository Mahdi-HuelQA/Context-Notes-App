import React from 'react';
import { Notes } from '../Notes/Notes';
// import { AddNote } from '../AddNote/AddNote';
import './notesList.css';

export const NotesList = ({ notes,handleAddNote, handleDelete, handleTag, updateTagsList, tagsList}) => {
  console.log(notes)
  console.log("list")
  return (
    <div className='notes-List' data-testid='notesList' >
      {notes?.map((note) => (
        <Notes key = { note.id }id={note._id} text={note.noteCreated} date={note.noteDate} handleDelete = {handleDelete} tag = {note.tag} photo  = {note.media}/>
      ))}
      {/* <AddNote handleAddNote = {handleAddNote} handleTag = {handleTag} updateTagsList = {updateTagsList} tagsList = {tagsList} /> */}
    </div>
  );
};


//test notes render on page