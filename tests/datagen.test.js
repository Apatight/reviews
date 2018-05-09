const generator = require('./../createCsv.js');
// Notes:
// 1. Data must be seeded into Mongodb by running npm run seed.
// 2. Mongodb must be started by using mongod from terminal
// 3. use database 'apateez'

test('a review is generated with the correct number of properties', () => {
  const data = generator.createReview();
  expect(data.split('|').length).toBe(7);
});

test('a place is generated with the correct number of properties', () => {
  const data = generator.createPlace();
  expect(data.split('|').length).toBe(7);
});

test('the correct number of reviews are generated', () => {
  const data = generator.createReviews();
  expect(data.split('\n').length).toBeLessThanOrEqual(7);
});