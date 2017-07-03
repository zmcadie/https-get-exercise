const getHTML = require('./https-functions')

function printHTML (html) {
  console.log(html);
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);