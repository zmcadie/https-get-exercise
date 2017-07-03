const getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const printReverse = (html) => {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, printReverse);