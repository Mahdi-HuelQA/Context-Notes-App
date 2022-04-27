import './App.css';
import { NotesList } from './Components/NotesList/NotesList';
import { Search } from './Components/Search/Search.jsx';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TagSearch } from './Components/TagSearch/TagSearch';
import { AddTag } from './Components/AddTag/AddTag';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'First note',
      date: '10/04/2022',
      newTag: 'Food',
    },
    {
      id: nanoid(),
      text: 'Second note',
      date: '11/04/2022',
      newTag: 'sport',
    },
    {
      id: nanoid(),
      text: 'Third note',
      date: '20/04/2022',
      newTag: 'Food',
    },
    {
      id: nanoid(),
      text: 'Fourth note',
      date: '22/04/2022',
      newTag: 'Memory',
    },
  ]);

  localStorage.setItem('myData', notes);

  const [tag, setTag] = useState('null');
  const [tagsList, SetTagsList] = useState(['food', 'sport','memory'])

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
    let result = notes.filter((note) => note.newTag.toLowerCase() === text.toLowerCase());
    console.log(result);
    console.log("tag search done")
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
  return SetTagsList([...tagsList,text])
 
}

console.log("tags list is  " + tagsList)
  return (
    <div className=' container'>
      <Search searchFilter={searchFilter} />
      <TagSearch tagFilter = {tagFilter}/>
      <AddTag updateTagsList = {updateTagsList}/>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDelete={deleteNote}
        handleTag={handleTag}
        updateTagsList = {updateTagsList}
        tagsList = {tagsList}
      />
    </div>
  );
};

export default App;
