import React from 'react';
import './AddNote.css';
import { useState,useContext } from 'react';
import { DropDown } from '../Dropdown/DropDown';
import ToastButton from '../ToastNotification/AddToast';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../App';
import { useAuth0 } from '@auth0/auth0-react';
import LogInButton from '../Authentication/LogIn/LogIn';
import LogOutButton from '../Authentication/LogOut/LogOut';

// import { height } from '@mui/system';


export const AddNote = ({
  handleAddNote,
  handleTag,
  updateTagsList,
  tagsList,
}) => {
  const [noteText, setNoteText] = useState('');
  const { user, isAuthenticated } = useAuth0();
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
      console.log('handle change');
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText(' ');
    console.log('handle save');
    notify();
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 'Enter' || e.keyCode === 13) {
      console.log('Enter Clicked!');
      handleSaveClick();
    }
  };

  const handleToast = () => {
    notify();
  };

  const notify = () => toast.dark('Saved');


  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : 'whitesmoke',
    color: darkTheme ?  '#f58523' : '#0b0b0b',
    padding: '10px',
    borderRadius:'10px',
    marginTop:  '10px',
    marginBottom: '10px',
  
    /* extra */
  
    minHeight: '170px',
    justifyContent: 'space-between',
    whiteSpace: 'pre-wrap',
    overflow: 'break-word',
    fontFamily:'Roboto sans-serif',
    fontWeight:  '500',
    borderColor: '#0b0b0b',
    borderStyle:'groove',
  };

  return (
    <div style={themeStyles} data-testid='addNote'>
      <textarea
        data-testid='addLimit'
        rows='8'
        cols='10'
        placeholder='Type to add a new note'
        value={noteText}
        onChange={handleChange}
        onKeyDown={handleKeypress}
      ></textarea>
      <div className='note-footer'>
        <small className='smallText' data-testid='addLimitText'>
          {characterLimit - noteText.length} remaining
        </small>
        <ToastButton className='save' handleSaveClick={handleSaveClick} user = {user}>
          {' '}
        </ToastButton>
        <DropDown
          handleTag={handleTag}
          updateTagsList={updateTagsList}
          tagsList={tagsList}
          handleToast={handleToast}
        />
      </div>
     {isAuthenticated ? <LogOutButton /> : <LogInButton />}
    </div>
  );
};
