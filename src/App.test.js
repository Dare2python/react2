import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders init', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/init/i);
  expect(linkElement).toBeInTheDocument();
});
