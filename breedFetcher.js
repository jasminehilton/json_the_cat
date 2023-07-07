const request = require("request");

let searchQuery = process.argv.slice(2);
searchQuery = searchQuery[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${searchQuery}`,
  function (error, _, body) {
    if (error) {
      console.error("error:", error); // Print the error if one occurred
      return;
    }
    if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log(
          `Sorry, the ${searchQuery} cat breed has not been discovered yet.`
        );
        return;
      }
      console.log(data[0].description);
    }
  }
);
