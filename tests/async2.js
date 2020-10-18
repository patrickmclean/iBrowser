const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

myObj = {
    myFunc: async function() {
        console.log('Im here');
        try {
            var result = await readdir('./dd');
        }
        catch (e) {
            console.log('Error: '+e);
        }
        console.log('result '+result);
    }
}


/*async function myF() {
  let names;
  try {
    names = await readdir('./');
  } catch (e) {
    console.log('e', e);
  }
  if (names === undefined) {
    console.log('undefined');
  } else {
    console.log('First Name', names);
  }
}

myF();*/
try {
    myObj.myFunc();
} catch(error) {
    console.log('error '+error);
}
console.log('really');
setTimeout(function() {console.log('at the very end')},2000);

