import React from 'react';
import { TagSearch } from '../TagSearch/TagSearch';
// import { render } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



describe('TagSearch', () => {
  // const renderComponent = ({ label }) => render(<TagSearch label={label} />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<TagSearch />, div);
  });

  it('Search button renders correctly', () => {
    // const { getByTestId } = renderComponent('Search Tag');
    // const input = getByTestId('tagSearch');

    render(<TagSearch />);
    const element = screen.getByTestId('tagSearch');

    expect(element).toHaveTextContent('Search Tag');
  });


  it('button is enabled', () => {
    // const { getByTestId } = renderComponent('Search Tag');
    // const input = getByTestId('tagSearch');

    render(<TagSearch />);
    const element = screen.getByTestId('tagSearch');
    expect(element).toBeEnabled()
    
  });
  
});
