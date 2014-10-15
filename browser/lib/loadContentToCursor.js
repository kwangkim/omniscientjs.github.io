var http = require('http');

module.exports = function (doc, cursor) {
  var url = '/documents/' + doc + '.md';
  return http.get({ path : url }, function (response) {
    if (response.statusCode !== 200) {
      return cursor.set('content', '## Could not find the document "' + doc + '"');
    }

    response.on('data', function (buf) {
      cursor = cursor.update('content', function (state) {
        return (state || '') + buf.toString();
      });
    });
  });
};
