const https = require('https');

function getAndPrintHTML (options) {

  let output = '';

  https.get(options, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => { output += data });
    response.on('end', () => { console.log(output) });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)