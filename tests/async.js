var fs = require('fs');

async function myReadFile() {
  try {
    console.log('Starting read');
    let result = await fs.readFile('input.txt',function(err,data){
      if (err) {
        return console.log(err);
      }
      console.log('Async read: '+ data.toString());
    })
  } catch (error) {
    console.log('there was an error - not callback');
  }


  console.log('Call made');

  /*
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "done!"
  */
}

myReadFile();