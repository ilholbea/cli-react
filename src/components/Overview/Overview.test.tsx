import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from './Overview';

describe('<Overview />', () => {
  test('it should mount', () => {
    render(<Overview />);
    
    const overview = screen.getByTestId('Overview');

    expect(overview).toBeInTheDocument();
  });
});