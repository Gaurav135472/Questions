// Q-1

// let count =0;

// setInterval(() => {  setInterval is called again and again on given time white setTimeOut is called only once on given time
//     count ++;
//     console.log(count);
// },1000)

// Q-2

// let count = 0;

// function infiniteCall () {
//     count ++;
//      console.log(count);
//     setTimeout(infiniteCall, 1000);
// }

// infiniteCall();

//Q-3

const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

const readFileAndPrintAsync = async (filePath) => {
  try {
    const data = await readFileAsync(filePath, 'utf8');
    console.log('File Contents:', data);

    await expensiveOperationAsync(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
};

const expensiveOperationAsync = async (data) => {
  let result = '';
  for (let i = 0; i < 100000; i++) {
    result += data;
  }
  console.log('Expensive Operation Result:', result);
};

const filePath = './demo.txt';

readFileAndPrintAsync(filePath);
