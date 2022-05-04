import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Notes} from '../Notes/Notes'

describe('Notes', () => {
  it('notes render correctly', () => {

    render(<Notes />);
    const element = screen.getByTestId('notes');

    expect(element).toBeVisible()
  });

  // it('notes text', () => {

  //   render(<Notes />);
  //   const element = screen.getByTestId('notes');

  //   expect(element).toContain("Initial State")
  // });

});
