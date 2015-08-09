var old = require('../data/original-archive.json');
var fs = require('fs');


fs.writeFile('./data/original-archive.json', JSON.stringify(old.data, null, 4), function(e) {
  console.log('Archive has been updated', e);
});
