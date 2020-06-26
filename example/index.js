// Sample code copied and pasted from the technical exercise specification, with an added catch()
const requestMultipleUrls = require('../src');

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls)
  .then(urlContent => {
    console.log(urlContent);
  })
  .catch(e => {
    console.log(e);
  });
