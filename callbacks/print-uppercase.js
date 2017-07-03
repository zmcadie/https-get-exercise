const getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

const printUppercase = (html) => {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUppercase);