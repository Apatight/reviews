const fs = require('fs');
const faker = require('faker');

const entries = 10000000;
const fileName = 'dummydata2.json';

const createReviews = () => {
  const reviews = [];
  const reviewCount = Math.floor(Math.random() * 7);
  for (let i = reviewCount; i > 0; i -= 1) {
    reviews.push({
      author_name: faker.name.findName(),
      profile_photo_url: faker.image.imageUrl(),
      rating: faker.random.number(1, 5),
      relative_time_description: faker.date.recent(Math.floor(Math.random() * 7)),
      text: faker.lorem.sentence(),
    });
  }
  return reviews;
};

const createEntry = (index) => {
  const reviewList = createReviews();
  const entry = {
    place_id: index,
    name: faker.company.companyName,
    price_level: Math.floor(Math.random() * 4),
    neighborhood: faker.address.city,
    reviews: reviewList,
    city: faker.address.city,
    street: faker.address.streetAddress,
    rating: Math.floor(Math.random() * 5),
  };
  return entry;
};

const createEntries = () => {
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
        stream.write(`['${JSON.stringify(createEntry(i))},`);
      } else {
        ok = stream.write(`${JSON.stringify(createEntry(i))},`);
      }
    } while (i < entries && ok);
    if (i < entries) {
      stream.once('drain', write);
    }
  };
  write();
};

createEntries();
