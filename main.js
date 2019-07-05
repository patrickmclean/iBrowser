bfs = require('./browsefs');
ddb = require('./awsdynamodb');

bfs.currentDirectory = './';

bfs.iterateDirectoryImages(bfs.currentDirectory, function(err, results) {
    if (err) throw err;
    results.forEach(function(item) {
        ddb.insert(item);
    });
  });


ddb.readAll();
