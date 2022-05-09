import React from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Toast.css'

  function ToastButton ({handleSaveClick}){
    

    return (
      <div>
        <button data-testid='toastbtn' className="toast-btn" onClick={handleSaveClick}>Add Note</button>
        <ToastContainer className="Toast" />
      </div>
    );
  }
  export default ToastButton