import { NotesList } from '../NotesList/NotesList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { nanoid } from 'nanoid';

const data = [
  {
    id: nanoid(),
    text: 'First note',
    date: '10/04/2022',
    newTag: 'Food',
  },
  {
    id: nanoid(),
    text: 'Second note',
    date: '11/04/2022',
    newTag: 'sport',
  },
  {
    id: nanoid(),
    text: 'Third note',
    date: '20/04/2022',
    newTag: 'Food',
  },
];

describe('NotesList', () => {
  it('notesList renders content correctly', () => {
    render(<NotesList notes={data} />);

    const notes = screen.getAllByTestId('notes');
    expect(notes[1]).toHaveTextContent('Second note');
  });

  // it('Note has a Tag', () => {
  //   render(<NotesList notes={data} />);

  //   const parent = screen.getAllByTestId('notes');
  //   expect(parent[1]).toContain('sport')
  // });
});

//   });
