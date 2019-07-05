fs = require('fs');
path = require('path');
uuid = require('uuid');

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
                var image = {
                    imageId : uuid(),
                    filename : path.basename(file),
                    folder : path.relative(that.currentDirectory,path.dirname(file)),
                    date : {
                        year: '',
                        month: '',
                        day: ''
                    }
                }

                fs.stat(file, function(err, stat) {
                    if (stat && stat.isDirectory()) {
                        that.iterateDirectoryImages(file, function(err, res) {
                            results = results.concat(res);
                            if (!--pending) done(null, results);
                        })
                    } else {
                        if ((path.extname(file) == ".jpg") || (path.extname(file) == ".JPG") ) {
                            image.date.year = stat.birthtime.getUTCFullYear();
                            image.date.month = stat.birthtime.getUTCMonth();
                            image.date.day = stat.birthtime.getUTCDay();
                            results.push(image);
                        }
                        if (!--pending) done(null, results);
                    }
                });
            });
        });
    },
    currentDirectory: String
}

/* TODO
Put something in the local directory to indicate what has been touched, so we don't upload the same thing twice
*/