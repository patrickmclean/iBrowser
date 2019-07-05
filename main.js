bfs = require('./browsefs');
ddb = require('./awsdynamodb');

bfs.currentDirectory = './';

/*
bfs.iterateDirectoryImages(bfs.currentDirectory, function(err, results) {
    if (err) throw err;
    console.log(results);
  });
*/

/*ddb.addTestData();
ddb.addTestData();*/
ddb.readTest();
/*ddb.createTable();*/