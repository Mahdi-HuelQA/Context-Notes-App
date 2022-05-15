import React from 'react';
import './DropDown.css';


export const DropDown = ({ handleTag, handleToast, tagsList }) => {
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

  const handleTagsFunctionality = (element) => {
    handleTag(element);
    // handleToast();
  };

  return (
    <div className='dropdown'>
      <button className='dropbtn'>Tag selector</button>
      <div className='dropdown-content'>
        {tagsList?.map((element, index) => {
          return (
            <button onClick={() => handleTagsFunctionality(element)} key = {index}>
              {element}
            </button>
          );
        })}
      </div>
    </div>
  );
};
