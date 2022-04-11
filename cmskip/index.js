const axios = require("axios");
const cheerio = require("cheerio");

const extractLinks = ($) => {
  [
    ...new Set(
      $(".page-numbers a")
        .map((_, a) => $(a).attr("href"))
        .toArray()
    ),
  ];
};

axios.get("https://scrapeme.live/shop/").then(({ data }) => {
  const $ = cheerio.load(data);
  const links = extractLinks($);

  console.log(links);
});
