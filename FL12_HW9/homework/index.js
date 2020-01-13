// 1
function convert() {
  let convertArrInput = [];
  let i;
  let argument;
  for (i = 0; i < arguments.length; i++) {
    argument = arguments[i];
    if (typeof argument === 'string') {
      convertArrInput.push(parseFloat(argument));
    } else if (typeof argument === 'number') {
      convertArrInput.push(argument.toString());
    } else {
      convertArrInput.push(argument);
    }
  }
  return convertArrInput;
}

convert('1', 2, 3, '4');

// 2
let arr2 = [1, 2, 3];
let func2 = function(el) {
  console.log(el * 2);
};
function executeforEach(arrInput, funcInput) {
  const newArr = [];
  for (let i = 0; i < arrInput.length; i++) {
    newArr.push(funcInput(arrInput[i]));
  }
  return newArr;
}

executeforEach(arr2, func2);

// 3
let arr3 = [2, '5', 8];
let func3 = function(el) {
  return el + 3;
};

function mapArray(arr, func) {
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      transformArr.push(parseFloat(arr[i]));
    } else {
      transformArr.push(arr[i]);
    }
  }

  return executeforEach(transformArr, func);
}

mapArray(arr3, func3);

// 4
let func4 = function(el) {
  return el % 2 === 0;
};
function filterArray(arr, func) {
  const filterValues = executeforEach(arr, func);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterValues[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

filterArray([2, 5, 8], func4);

// 5
function flipOver(inputString) {
  let i;
  let reversesString = '';
  for (i = inputString.length - 1; i >= 0; i--) {
    reversesString += inputString[i];
  }
  return reversesString;
}

flipOver('hey world');

// 6
function makeListFromRange([a, b]) {
  let newArrFromRange = [];
  for (let i = a; i <= b; i++) {
    newArrFromRange.push(i);
  }
  return newArrFromRange;
}

makeListFromRange([2, 7]);

// 7
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, propName) {
  function getKey(obj) {
    return obj[propName];
  }
  return executeforEach(arr, getKey);
}

getArrayOfKeys(actors, 'name');

// 8
let arr8 = [58, 14, 48, 2, 31, 29];

function substitute(arr) {
  return mapArray(arr, function(el) {
    return el < 30 ? '*' : el;
  });
}

substitute(arr8);

// 9
const date = new Date(2019, 0, 2);
const MILLISECONDS_IN_DAY = 86400000; // 24 * 60 * 60 * 1000
function getPastDay(date, timeDiffDays) {
  const timeDiffMs = timeDiffDays * MILLISECONDS_IN_DAY;
  const prevDateMs = new Date(date.getTime() - timeDiffMs);
  return prevDateMs.getDate();
}

// function getPastDay(date, timeDiffDays) {
//    const prevDate = date.setDate(date.getDate() + timeDiffDays);
//     return prevDate.getDate();
// }

// 10
function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();

  // if (month.length < 2) {
  //   month = '0' + month;
  // }
  // if (day.length < 2) {
  //   day = '0' + day;
  // }

  return [year, month, day].join('/') + ' ' + hour + ':' + minute;
}
