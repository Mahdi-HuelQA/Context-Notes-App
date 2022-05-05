import React from 'react';
import './DropDown.css';
import TagToast from '../ToastNotification/TagToast';

export const DropDown = ({ handleTag, updateTagsList,tagsList }) => {

  // const tagSetter = (text) => {
  //   handleTag(text);
  // };

  
// create temp state that will pick up tag text
//btn to set new state
//btn to call handletag
// calback function to stop infinite loop
//option to change selector list
//make list dynamic with a foreach statement
// tagsList.array.forEach(element => {
  
// <button onClick={tagSetter => {handleTag(element)}}>
//           {element}
//         </button>

// });


// const handleToast  = () => {} 




  return (
    <div className='dropdown'>
      <button className ='dropbtn'>Tag selector</button>
      <div className='dropdown-content'>
          {tagsList?.map(element => {
  
   return <button onClick={tagSetter => {handleTag(element)}}>
            {element}
          </button>
  
  })}
      </div>
    </div>
  );
};



