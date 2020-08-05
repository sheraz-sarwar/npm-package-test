# Introduction
This repo has been set up to test the creation, publication and installation of a simple npm package. The package allows users to fetch an array of URLs which contain JSON data and return their contents in a promise

# Installation
To install the package:

`npm i ft-tech-test-ss --save`

To import the package into your application:

`const requestMultipleUrls = require('ft-tech-test-ss');`

# Usage
```
const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

requestMultipleUrls(urls)
  .then(content => {
    console.log(content);
  })
  .catch(e => {
    console.log(e);
  });
```

# Dependencies
`@babel/cli` `@babel/core` `@babel/preset-env`: Babel is a JavaScript transpiler, it is used here to allow backwards compatibility of ES6+ (ECMAScript 2015+) code, for example, the usage of arrow functions or `const`.

`isomorphic-fetch` `es6-promise`: Isomorphic fetch allows use of the fetch API within a Node environment. Alternatives, such as node-fetch and axios could also have been used. ES6 Promise is a polyfill, we could instead rely on Babel for this.

`jest`: Jest is a popular testing framework for JavaScript. For this project, it is used to help define the test modules, tests, and assertions in `test/index.test.js`.

`fetch-mock`: This package allows users to mock http requests which use the fetch API. In our case, requests to the json files in the s3 buckets would be replaced with a mock response for the purpose of testing.
