import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('exibe a apresentação do portfólio', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Jeremias Kalebe' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '#contact');
});
