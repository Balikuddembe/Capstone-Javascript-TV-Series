import comments from './__mocks__/commentsCount.js';

const commentList = [
  {
    name: 'balix',
    comment: 'Very interesting Movie',
  },
  {
    name: 'Louise',
    comment: 'Very interesting & educative',
  },
  {
    name: 'Daph',
    comment: 'For testing purposes',
  },
];
describe('comments test', () => {
  test('i expect comment List counter to be 3', () => {
    expect(comments(commentList)).toBe(3);
  });
});
