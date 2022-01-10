import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BasicInstallation from './BasicInstallation';

describe('<BasicInstallation />', () => {
  test('it should mount', () => {
    render(<BasicInstallation />);
    
    const basicInstallation = screen.getByTestId('BasicInstallation');

    expect(basicInstallation).toBeInTheDocument();
  });
});