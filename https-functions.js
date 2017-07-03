module.exports = function getHTML (options, callback) {
  const https = require('https');

  let html = '';

  https.get(options, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => { html += data });
    response.on('end', () => { callback(html) });
  });
};