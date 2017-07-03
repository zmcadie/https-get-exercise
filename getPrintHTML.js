const https = require('https');

function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let output = "";

  https.get( requestOptions, (response) => {

    response.setEncoding('utf-8');

    response.on('data', (data) => { output += data });

    response.on('end', () => { console.log(output) });

  });

}

getAndPrintHTML()