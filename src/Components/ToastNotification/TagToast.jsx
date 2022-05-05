import React from 'react';

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Toast.css'

  function TagToast ({handleToast}){
    

    return (
      <div>
        <button data-testid='toastbtn' className="toast-btn" onClick={handleToast}>Add Note</button>
        <ToastContainer className="Toast" />
      </div>
    );
  }
  export default TagToast