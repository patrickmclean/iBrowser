imageThumbnail = require('image-thumbnail');
fs = require('fs');

infile = '/Users/patrickmclean/Pictures/Test/1998/9811tubbiesH/PIC00009.jpg';
tbfile = '/Users/patrickmclean/Pictures/Test/1998/9811tubbiesH/PIC00009-tb.jpg';


imageThumbnail(infile, { width: 400, responseType: 'base64' })
    .then( thumbnail => {
        fs.writeFile(tbfile, thumbnail, {encoding: 'base64'},function (err) {
            if (err) throw err;
        })
    })
    .catch( err => {console.log(err)})