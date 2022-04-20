 import './App.css';
import { NotesList } from './Components/NotesList/NotesList';
import { useState } from 'react';
import {nanoid} from 'nanoid';

const App = () => {
   const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: "10/04/2022",
  }, {
    id: nanoid(),
    text: "This is 2nd note",
    date: "11/04/2022",
  }, {
    id: nanoid(),
    text: "This is my third note",
    date: "20/04/2022",
  }, {
    id: nanoid(),
    text: "This is my fourt note",
    date: "22/04/2022",
  }])

  const addNote = (text) => { 
  const date =  new Date()
    const newNote = {
      id :nanoid(),
      text: text,
      date : date.toLocaleDateString() 
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }
  return (
    <div className=' container'>
      <NotesList notes = {notes} handleAddNote = {addNote}/>
    </div>
  );
};

export default App;
