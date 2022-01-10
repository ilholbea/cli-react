import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConfigureNamespace from './ConfigureNamespace';

describe('<ConfigureNamespace />', () => {
  test('it should mount', () => {
    render(<ConfigureNamespace />);
    
    const configureNamespace = screen.getByTestId('ConfigureNamespace');

    expect(configureNamespace).toBeInTheDocument();
  });
});