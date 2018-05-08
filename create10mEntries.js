const fs = require('fs');
const faker = require('faker');

const entries = 10000000;
const placeFile = 'dummydata/places.json';

const createReview = (index) => {
  const review = {
    author_name: faker.name.findName(),
    profile_photo_url: faker.image.imageUrl(),
    rating: Math.floor(Math.random() * 5),
    relative_time_description: faker.date.recent(Math.floor(Math.random() * 7)),
    text: faker.lorem.sentence(),
    place_id: index,
  };
  return review;
};

const createReviews = (count) => {
  const reviews = [];
  const reviewCount = Math.floor(Math.random() * 7);
  for (let j = 0; j < reviewCount; j += 1) {
    reviews.push(createReview(count));
  }
  return reviews;
};

const createEntry = (index) => {
  const reviewList = createReviews(index);
  const entry = {
    place_id: index,
    name: faker.company.companyName(),
    price_level: Math.floor(Math.random() * 4),
    neighborhood: faker.address.city(),
    reviews: reviewList,
    city: faker.address.city(),
    street: faker.address.streetAddress(),
    rating: Math.floor(Math.random() * 5),
  };
  return entry;
};

const createEntries = (count, fileName) => {
  const options = {
    autoClose: true,
  };

  const writeStream = fs.createWriteStream(fileName, options);
  let i = 0;
  const write = () => {
    let ok = true;
    do {
      i += 1;
      if (i === 1) {
        writeStream.write(`[${JSON.stringify(createEntry(i))}`);
      } else {
        ok = writeStream.write(`,${JSON.stringify(createEntry(i))}`);
      }
    } while (i < count && ok);
    if (i < count) {
      writeStream.once('drain', write);
    } else {
      writeStream.write(']');
    }
  };
  write();
};

createEntries(entries, placeFile);

