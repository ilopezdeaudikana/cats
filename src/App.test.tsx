import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const dogsLink = screen.getByText(/dogs/i)
  const catsLink = screen.getByText(/cats/i);
  expect(catsLink).toBeInTheDocument();
  expect(dogsLink).toBeInTheDocument();
});
