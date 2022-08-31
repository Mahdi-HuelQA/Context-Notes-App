import React from 'react';
import './AddNote.css';
import { useState, useContext, useEffect, useRef } from 'react';
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
  const [notePhoto, setNotePhoto] = useState('');
  const [preview, setPreview] = useState(notePhoto);
  const fileInputRef = useRef('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
      console.log('handle change');
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, notePhoto);
     
    }
    setNoteText(' ');
    console.log('handle save');
    notify();
    setNotePhoto('')
    
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

  const handlePhoto = (e) => {
    // setNotePhoto(e.target.files[0])
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setNotePhoto(file);
    } else {
      setNotePhoto(null);
    }
  };
  const notify = () => toast.dark('Saved');

  const darkTheme = useContext(ThemeContext);
  
  console.log(`${notePhoto}`);
 
  useEffect(() => {
    if (notePhoto) {
      const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        // send to server as base64
        // on server: base64 decode, push result to S3 as a file
        setNotePhoto(base64);
      };
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        uploadImage()
      };
      reader.readAsDataURL(notePhoto);
    } else {
      setPreview(null);
    }
  }, [notePhoto]);



  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  return (
    <div className={ darkTheme ? "lightNote" : "darkNote"} data-testid='addNote'> 
      <textarea
        data-testid='addLimit'
        rows='8'
        cols='10'
        placeholder='Type to add a new note'
        value={noteText}
        onChange={handleChange}
        onKeyDown={handleKeypress}
      ></textarea>
      <input
        type='file'
        id='file-input'
        name='ImageStyle'
        accept='image/*'
        ref={fileInputRef}
        onChange={handlePhoto}
      />
      {preview? <img className='preview'  src={preview} alt='text' />: null }
      <div className='note-footer'>
        <small className='smallText' data-testid='addLimitText'>
          {characterLimit - noteText.length} remaining
        </small>
        <ToastButton
          className='save'
          handleSaveClick={handleSaveClick}
          user={user}
        >
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
