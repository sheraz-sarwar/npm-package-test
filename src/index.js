require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestMultipleUrls = (urls) => {
  // Throw an Error if the argument is not an array, as that's the only type we want to handle
  if (!Array.isArray(urls)) {
    return Promise.reject(new Error('Argument given to \'requestMultipleUrls()\' must be an array'))
  }

  return Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
  ));
}

module.exports = requestMultipleUrls;
