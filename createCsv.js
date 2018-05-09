const fs = require('fs');
const faker = require('faker');

const fileName = 'dummydata/postgresData.csv';
const entryNum = 10000000;

const createPlace = (index) => {
  const obj = `${index}|${faker.company.companyName()}|${Math.floor(Math.random() * 4)}|${faker.address.county()}|${faker.address.city()}|${faker.address.streetAddress()}|${Math.floor(Math.random() * 5)}\n`;
  return obj;
};

const createReview = (placeIndex, index) => {
  const review = `${index}|${faker.name.findName()}|${faker.image.imageUrl()}|${Math.floor(Math.random() * 5)}|${faker.date.recent(Math.floor(Math.random() * 7))}|${faker.lorem.sentence()}|${placeIndex}\n`;
  return review;
};

let id = 1;
const createReviews = (index) => {
  let reviews = '';
  const reviewCount = Math.floor(Math.random() * 7);
  for (let i = 0; i < reviewCount; i += 1) {
    reviews += createReview(index, id);
    id += 1;
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

// Should comment one of these as they're calling an aync func
generateCSV(entryNum, createPlace);
// generateCSV(entryNum, createReviews);


module.exports.createReviews = createReviews;
module.exports.createReview = createReview;
module.exports.createPlace = createPlace;
