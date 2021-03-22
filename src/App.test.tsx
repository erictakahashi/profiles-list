import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render a `profiles list` text', () => {
    render(<App />);
    const text = screen.getByText(/profiles list/i);
    expect(text).toBeInTheDocument();
  });
});
