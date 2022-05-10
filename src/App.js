import './App.css';
import { NotesList } from './Components/NotesList/NotesList';
import { useState } from 'react';
import { Data } from './Components/Data/Data';
import { nanoid } from 'nanoid';
import { Header } from './Components/Header/Header';
import { AddNote } from './Components/AddNote/AddNote';
import DisplaySearchNotes from './Components/Display/DisplaySearchNotes';
import Nav from './Components/Nav/Nav';


const App = () => {
  const [notes, setNotes] = useState(Data);
  const [search,setSearch] = useState(notes)
  const [searchToggle,setSearchToggle] = useState(notes)
  const [tag, setTag] = useState('null');
  const [tagsList, SetTagsList] = useState(['food', 'sport', 'memory']);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      newTag: tag,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    console.log('delete');
    console.log(notes);
    let total = notes.filter((note) => note.id !== id);
    console.log(total);
    setNotes(total);
  };

  const searchFilter = (text) => {
    let result = notes.filter(
      (note) => note.text.toLowerCase() === text.toLowerCase()
    );
    console.log(result);
    // alert("Text:" + result[0].text + " date: " + result[0].date);
  };

  const tagFilter = (text) => {
    let result = notes.filter(
      (note) => note.newTag.toLowerCase() === text.toLowerCase()
    );
    console.log(result);
    //test state for search 
    setNotes(result)
 
     
    console.log('tag search done');
    // alert("Text:" + result[0].text + " date: " + result[0].date);
  };

  // Set new tag function
  const handleTag = (text) => {
    return setTag(text);
  };
  // console.log('tag = ' + tag);
  console.log(notes);

  // increase tags list
  const updateTagsList = (text) => {
    return SetTagsList([...tagsList, text]);

    // notes display search


  };

  console.log('tags list is  ' + tagsList);

  return (
    <div className=' container'>
      <Header tagFilter = {tagFilter}
      searchFilter = {searchFilter}
      updateTagsList = {updateTagsList} />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDelete={deleteNote}
        handleTag={handleTag}
        updateTagsList={updateTagsList}
        tagsList={tagsList}
      />
     <AddNote handleAddNote = {addNote} handleTag = {handleTag} updateTagsList = {updateTagsList} tagsList = {tagsList} />
     {/* <DisplaySearchNotes    notes={notes}
        handleAddNote={addNote}
        handleDelete={deleteNote}
        tagFilter = {tagFilter}
        
        /> */}
      {/* <div>
        <Nav />
      </div> */}
    </div>
  );
};

export default App;
