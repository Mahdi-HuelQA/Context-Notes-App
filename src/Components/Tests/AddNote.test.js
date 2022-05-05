import React from 'react';
import { AddNote } from '../AddNote/AddNote';
import { render, screen } from '@testing-library/react';
import ToastButton from '../ToastNotification/Toast';
import '@testing-library/jest-dom/extend-expect';

describe('TagSearch', () => {
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
});
