import './App.css';
import { NotesList } from './Components/NotesList/NotesList';
import { useState, useEffect } from 'react';
import { Data } from './Components/Data/Data';
import { nanoid } from 'nanoid';
import { Header } from './Components/Header/Header';
import { AddNote } from './Components/AddNote/AddNote';
import Profile from './Components/Authentication/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LogInButton from './Components/Authentication/LogIn/LogIn';
import LogOutButton from './Components/Authentication/LogOut/LogOut';
// import Nav from './Components/Nav/Nav';

const App = () => {
  const [notes, setNotes] = useState(Data);
  const [search, setSearch] = useState(notes);
  const { user, isAuthenticated } = useAuth0();
  const [searchToggle, setSearchToggle] = useState(false);
  const [tag, setTag] = useState('null');
  const [tagsList, SetTagsList] = useState(['food', 'sport', 'memory']);

  // Add function
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      newTag: tag,
      name: isAuthenticated ? user.name : 'No User',
      email: isAuthenticated ? user.email : 'No Email',
      //set default user
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Delete function
  const deleteNote = (id) => {
    console.log('delete');
    console.log(notes);
    let total = notes.filter((note) => note.id !== id);
    console.log(total);
    setNotes(total);
  };

  // search text
  const searchFilter = (text) => {
    setSearchToggle(true);
    let result = notes.filter(
      // (note) => note.text.toLowerCase() === text.toLowerCase()
      (note) => note.text.toLowerCase().includes(text.toLowerCase())
    );

    //test state for search
    setSearch(result);
    if (result.length === 0) {
      setSearchToggle(false);
    }
    console.log('text search done');
  };

  // search tags
  const tagFilter = (text) => {
    setSearchToggle(true);

    let result = notes.filter(
      (note) => note.newTag.toLowerCase() === text.toLowerCase()
    );
    console.log(result);
    //test state for search

    setSearch(result);

    if (result.length === 0) {
      setSearchToggle(false);
    }
    console.log('tag search done');
  };

  // Set new tag function
  const handleTag = (text) => {
    return setTag(text);
  };
  // console.log('tag = ' + tag);
  console.log(notes);

  // increase tags list
  const updateTagsList = (text) => {
    if (text.length !== 0) return SetTagsList([...tagsList, text]);

    // notes display search
  };

  // add user name to data objectFit: done above in add note

  //fetch Quotes 

  async function fetchText() {
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.text();
    console.log(data);
}

fetchText()


  console.log('tags list is  ' + tagsList);
  console.log(user);



  return (
    <div className='container'>
      <Header
        tagFilter={tagFilter}
        searchFilter={searchFilter}
        updateTagsList={updateTagsList}
      />
      <NotesList
        notes={searchToggle ? search : notes}
        handleAddNote={addNote}
        handleDelete={deleteNote}
        handleTag={handleTag}
        updateTagsList={updateTagsList}
        tagsList={tagsList}
      />
      <AddNote
        handleAddNote={addNote}
        handleTag={handleTag}
        updateTagsList={updateTagsList}
        tagsList={tagsList}
      />

      <div className='info'>
        {/* <Profile /> */}

        {isAuthenticated ? <LogOutButton /> : <LogInButton />}
      </div>
    </div>
  );
};

export default App;
