import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BaseInstallation from './BaseInstallation';

describe('<BaseInstallation />', () => {
  test('it should mount', () => {
    render(<BaseInstallation />);

    const basicInstallation = screen.getByTestId('BaseInstallation');

    expect(basicInstallation).toBeInTheDocument();
  });
});
