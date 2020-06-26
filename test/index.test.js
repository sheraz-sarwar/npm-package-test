require('node-fetch');
const fetchMock = require('fetch-mock');
const requestMultipleUrls = require('../src');

const response = {
  message: 'successful response',
};

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

fetchMock.any(response);

describe('requestMultipleUrls failure', () => {
  test('requestMultipleUrls throws error with a string argument', () => {
    return expect(requestMultipleUrls(urls[0])).rejects.toThrow(Error);
  });
  test('requestMultipleUrls throws error with an object argument', () => {
    return expect(requestMultipleUrls({ urls })).rejects.toThrow(Error);
  });
  test('requestMultipleUrls throws error with no argument', () => {
    return expect(requestMultipleUrls()).rejects.toThrow(Error);
  });
});

describe('requestMultipleUrls success', () => {
  test('requestMultipleUrls returns contents with a valid argument', () => {
    return expect(requestMultipleUrls(urls)).resolves.toEqual(Array(3).fill(response));
  });
});
