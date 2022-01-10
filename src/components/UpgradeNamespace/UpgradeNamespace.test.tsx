import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpgradeNamespace from './UpgradeNamespace';

describe('<UpgradeNamespace />', () => {
  test('it should mount', () => {
    render(<UpgradeNamespace />);
    
    const upgradeNamespace = screen.getByTestId('UpgradeNamespace');

    expect(upgradeNamespace).toBeInTheDocument();
  });
});