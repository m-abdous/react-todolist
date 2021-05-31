import { render, screen } from '@testing-library/react';
import App from './App';
import Home from '@pages/Home/Home';

test('render App', () => {
  render(<App />);
});
