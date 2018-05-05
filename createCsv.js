const fs = require('fs');
const faker = require('faker');

const fileName = 'dummydata/postgresData.csv';

const entryNum = 10000000;

const createPlace = (index) => {
  const obj = `${index},${faker.company.companyName()},${Math.floor(Math.random() * 4)},${faker.address.county()},${faker.address.city()},${faker.address.streetAddress()},${Math.floor(Math.random() * 5)}\n`;
  return obj;
};

const createReview = (index) => {
  const review = `${faker.image.imageUrl()},${Math.floor(Math.random() * 5)},${faker.date.recent(Math.floor(Math.random() * 7))},${faker.lorem.sentence()},${index}\n`;
  return review;
};

const createReviews = (index) => {
  let reviews = '';
  const reviewCount = Math.floor(Math.random() * 7);
  for (let i = 0; i < reviewCount; i += 1) {
    reviews += createReview(index);
  }
  return reviews;
};

const generateCSV = (count, factory) => {
  const options = {
    autoClose: true,
  };

  const writeStream = fs.createWriteStream(fileName, options);
  let i = 0;
  const write = () => {
    let ok = true;
    do {
      i += 1;
      ok = writeStream.write(`${factory(i)}`);
    } while (i < count && ok);
    if (i < count) {
      writeStream.once('drain', write);
    }
  };
  write();
};

generateCSV(entryNum, createPlace);
//generateCSV(entryNum, createReviews);

/*
    profile_photo_url: faker.image.imageUrl(),
    rating: Math.floor(Math.random() * 5),
    relative_time_description: faker.date.recent(Math.floor(Math.random() * 7)),
    text: faker.lorem.sentence(),
    place_id: index,

*/