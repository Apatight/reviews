const rp = require('request-promise');
const fs = require('fs');

// This file only needs to be run ONCE to do an API call and generate a new file.

const getJSONfromList = (array) => {
  let counter = 0;
  const JSONarray = [];

  var createList = () => { // fill in API key
    const options = {
      url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${array[counter].place_id}&key=${APIKEY}`,
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true,
    };

    rp(options)
      .then((store) => {
        console.log('STORE IS', store);
        const obj = store.result;

        console.log('OBJ IS', obj);
        JSONarray.push(obj);
        counter++;
        if (counter < array.length) {
          createList();
        } else {
          // write file here
          console.log(JSONarray);
          fs.writeFile('./fullList.json', JSON.stringify(JSONarray, null, 2));
        }
      });
  };

  createList();
};

getJSONfromList(list);
