fs = require('fs');
path = require('path');

module.exports = {
    iterateDirectoryImages: function(dir,done) {
        var results = [];
        that = this;
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var pending = list.length;
            if (!pending) return done(null, results);
            list.forEach(function(file) {
                file = path.resolve(dir, file);
                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        that.iterateDirectoryImages(file, function(err, res) {
                            results = results.concat(res);
                            if (!--pending) done(null, results);
                        })
                    } else {
                        if ((path.extname(file) == ".jpg") || (path.extname(file) == ".JPG") ) {
                            results.push(file);
                        }
                        if (!--pending) done(null, results);
                    }
                });
            });
        });
    },
    currentDirectory: String
}