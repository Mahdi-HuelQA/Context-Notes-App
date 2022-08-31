import './App.css';
import { NotesList } from './Components/NotesList/NotesList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Header } from './Components/Header/Header';
import { AddNote } from './Components/AddNote/AddNote';
import { useAuth0 } from '@auth0/auth0-react';
import Quotes from './Components/Quotes/Quotes';
import React from 'react';
export const ThemeContext = React.createContext();
// import Nav from './Components/Nav/Nav';
const url = 'http://localhost:8000';

const App = () => {
  const [notes, setNotes] = useState();
  const [search, setSearch] = useState(notes);
  const { user, isAuthenticated } = useAuth0();
  const [searchToggle, setSearchToggle] = useState(false);
  const [tag, setTag] = useState('null');
  const [tagsList, SetTagsList] = useState(['food', 'sport', 'memory']);
  const [darktheme, setDarkTheme] = useState(true);
  const [deleteId, setDeleteId] = useState();
  const [noteAdded, setNoteAdded] = useState();

  // Add function
  const addNote = (text, media) => {
    const newNote = {
      id: nanoid(),
      noteCreated: text,
      tag: tag,
      name: isAuthenticated ? user.name : null,
      email: isAuthenticated ? user.email : 'mahdi@huel.com',
      media: media ? media : null,

      //set default user
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setNoteAdded(newNote);
  };

  //Post Fetch Request
  useEffect(() => {
    async function fetchPost() {
      const requestOptions = {
        method: 'POST',
        Accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteAdded),
      };
      console.log(requestOptions);
      let response = await fetch(`${url}`, requestOptions);
      let data = await response.json();
      console.log('Post');
      console.log(data);
    }
    fetchPost();
    fetchText();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteAdded]);

  // Delete function
  const deleteNote = (id) => {
    console.log('delete');
    // console.log(notes);
    let total = notes.filter((note) => note.id !== id);
    // console.log(total);
    setNotes(total);
    return setDeleteId(id);
  };

  useEffect(() => {
    async function fetchDelete() {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      // console.log(requestOptions);
      fetch(`${url}/${deleteId}`, requestOptions);
      console.log('delete');
      // console.log(deleteId);
      // setDeleteId(null);
    }
    fetchDelete();
    fetchText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteId]);

  // search text
  const searchFilter = (text) => {
    setSearchToggle(true);
    let result = notes.filter(
      // (note) => note.text.toLowerCase() === text.toLowerCase()
      (note) => note.noteCreated.toLowerCase().includes(text.toLowerCase())
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
      (note) => note.tag.toLowerCase() === text.toLowerCase()
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

  //Darktheme Toggle

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    console.log(darktheme);
  };

  console.log('tags list is  ' + tagsList);
  console.log(user);

  useEffect(() => {
    fetchText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteAdded, deleteId]);

  // Fetch request for notes
  async function fetchText() {
    console.log('fetching');
    let response = await fetch(url);
    let data = await response.json();
    setNotes(data);
    console.log(data);
  }

  return (
    <>
      <ThemeContext.Provider value={darktheme}>
        <div className='container'>
          <Header
            tagFilter={tagFilter}
            searchFilter={searchFilter}
            updateTagsList={updateTagsList}
            toggleTheme={toggleTheme}
          />
          <Quotes />
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
            fetchNotes={fetchText}
          />

          <div className='info'>{/* <Profile /> */}</div>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
