import { render } from '@testing-library/react-native'
import React from 'react';
import { Header } from './Header';

describe('App.tsx', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header />)
    expect(getByText('News')).toBeTruthy()
  });
})