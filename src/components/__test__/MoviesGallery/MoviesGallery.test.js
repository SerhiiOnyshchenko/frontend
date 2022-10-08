import { render, screen } from '@testing-library/react';
import MoviesGallery from './../../MoviesGallery/MoviesGallery';

test('renders learn react link', () => {
  const mokMoviesList = [
    { _id: '11111', nickname: 'name1', image: 'url1' },
    { _id: '22222', nickname: 'name2', image: 'url2' },
    { _id: '33333', nickname: 'name3', image: 'url3' },
  ];
  render(<MoviesGallery onOpen={() => true} moviesList={mokMoviesList} />);
  const pElement = screen.getByText(/name2/i);
  expect(pElement).toBeDefined();
});
