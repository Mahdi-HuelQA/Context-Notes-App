import React from 'react';
import { AddTag } from '../AddTag/AddTag';
// import { render } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TagSearch', () => {
  it('Test works', () => {
    const div = document.createElement('div');
    render(<AddTag />, div);
  });

  it('Add button text is correct and renders', () => {
    render(<AddTag />);
    const element = screen.getByTestId('add');

    expect(element).toHaveTextContent('Add Tag');
  });

  it('Add button is enabled', () => {
    render(<AddTag />);
    const element = screen.getByTestId('add');
    expect(element).toBeEnabled();
  });
});
