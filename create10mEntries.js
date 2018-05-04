const fs = require('fs');
const faker = require('faker');

const entries = 10000000;
const placeFile = 'dummydata/places.json';
const reviewFile = 'dummydata/reviews.json';

const createReview = (index) => {
  const review = {
    author_name: faker.name.findName(),
    profile_photo_url: faker.image.imageUrl(),
    rating: faker.random.number(1, 5),
    relative_time_description: faker.date.recent(Math.floor(Math.random() * 7)),
    text: faker.lorem.sentence(),
    place_id: index,
  };
  return review;
};

const createReviews = (count) => {
  const reviews = [];
  const reviewCount = Math.floor(Math.random() * 7);
  for (let j = reviewCount; j > 0; j -= 1) {
    reviews.push(createReview(count));
  }
  return reviews;
};

const createPlace = (index) => {
  const entry = {
    place_id: index,
    name: faker.company.companyName(),
    price_level: Math.floor(Math.random() * 4),
    neighborhood: faker.address.city(),
    reviews: [],
    city: faker.address.city(),
    street: faker.address.streetAddress(),
    rating: Math.floor(Math.random() * 5),
  };
  return entry;
};

const createEntries = (count, entryFactory, fileName, callback) => {
  const options = {
    autoClose: true,
  };
  const stream = fs.createWriteStream(fileName, options);
  let i = 0;
  const write = () => {
    let ok = true;
    do {
      i += 1;
      if (i === 1) {
        stream.write(`[${JSON.stringify(entryFactory(i))}`);
      } else {
        ok = stream.write(`,${JSON.stringify(entryFactory(i))}`);
      }
    } while (i < count && ok);
    if (i < count) {
      stream.once('drain', write);
    } else {
      stream.write(']');
      if (callback) {
        callback();
      }
    }
  };
  write();
};

const reviewCb = () => createEntries(entries, createReviews, reviewFile);
createEntries(entries, createPlace, placeFile, reviewCb);
