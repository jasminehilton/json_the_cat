const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, _, body) {
      if (error) {
        return callback(error, null);
      }
      if (body) {
        const data = JSON.parse(body);
        if (data.length === 0) {
          return callback(
            `Sorry, the ${breedName} cat breed has not been discovered yet.`,
            null
          );
        }
        return callback(null, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
