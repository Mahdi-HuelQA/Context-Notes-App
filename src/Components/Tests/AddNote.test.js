import React from 'react';
import { AddNote } from '../AddNote/AddNote';
import { render, screen } from '@testing-library/react';
import ToastButton from '../ToastNotification/AddToast.jsx';
import '@testing-library/jest-dom/extend-expect';

describe('Add Note', () => {
  // const renderComponent = ({ label }) => render(<TagSearch label={label} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<AddNote />, div);
  });

  it('Add note component renders correctly', () => {
    render(<ToastButton />);
    const element = screen.getByTestId('toastbtn');

    expect(element).toHaveTextContent('Add Note');
  });

  it('Save note button is enabled', () => {
    render(<AddNote />);
    const element = screen.getByTestId('addNote');
    expect(element).toBeEnabled();
  });

  it('Add note limit text appears', () => {
    render(<AddNote />);
    const element = screen.getByTestId('addLimitText');
    // expect(element.value).toBeGreaterThan(0)
    // expect(element).toHaveValue("200")
    expect(element).toHaveTextContent("200 remaining");
  });

  
  // it('Add note limit is less than 200', () => {
  //   render(<AddNote />);
  //   const element = screen.getByTestId('addLimit');
  //  expect(element.value).toBeGreaterThan(0)  
  // });

});
