bfs = require('./browsefs');

bfs.currentDirectory = './';

bfs.iterateDirectoryImages(bfs.currentDirectory, function(err, results) {
    if (err) throw err;
    console.log(results);
  });