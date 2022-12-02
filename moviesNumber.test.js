import numberOfMovies from './__mocks__/moviesNumber.js';

const arrayOfMovies = ['Girl Meets World',
  'Kirby Buckets',
  'Black Panther',
];
describe('Number of Movies Test', () => {
  test('test the number of Movies', () => {
    expect(numberOfMovies(arrayOfMovies)).toBe(3);
  });
});