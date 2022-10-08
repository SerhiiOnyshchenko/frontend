import { render, screen } from '@testing-library/react';
import Button from './../../Button/Button';

test('renders learn react link', () => {
  render(<Button onClick={() => 'Text'} title={'some text'} />);
  const buttonElement = screen.getByText(/some text/i);
  expect(buttonElement).toBeDefined();
});
