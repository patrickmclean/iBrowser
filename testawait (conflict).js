const fs = require('fs');
const dir = '/Users/patrickmclean/Pictures/Test/1997/9706sf'
fs.readdir(dir, function(err, list) {
  list.forEach(element => {
      console.log(element);
      fs.stat(element, function(err,stat){
        console.log(stat.birthtime);
      })
  });
})