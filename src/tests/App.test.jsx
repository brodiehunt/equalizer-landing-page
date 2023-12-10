import {describe, expect, it} from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App.jsx';

describe('App', () => {
  it('renders headline', () => {
    render(<App  />);

    expect(screen.queryByText('Hello world')).toBeInTheDocument();

    // check if App components renders headline
  });
});

describe('test test to be truthy', () => {
  it('should be truthey', () => {
    expect(true).toBe(true);
  })
  
})