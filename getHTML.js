const https = require('https');

function getHTML (options, callback) {

  let html = ''

  https.get(options, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => { html += data });
    response.on('end', () => { callback(html) });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);