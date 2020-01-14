// 1
const CONST_TASK_1 = 2;

function convert() {
  const convertArrInput = [];
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

convert('1', CONST_TASK_1, '4');

// 2
const CONST_TASK_2 = 2;
const arr2 = [CONST_TASK_2, CONST_TASK_2];
let funcTask2 = function(el) {
  console.log(el * CONST_TASK_2);
};

function executeforEach(arrInput, funcInput) {
  const newArr = [];
  for (let i = 0; i < arrInput.length; i++) {
    newArr.push(funcInput(arrInput[i]));
  }
  return newArr;
}

executeforEach(arr2, funcTask2);

// 3
const CONST_TASK_3 = 3;
const arr3 = [CONST_TASK_3, '5'];
let funcTask3 = function(el) {
  return el + CONST_TASK_3;
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

mapArray(arr3, funcTask3);

// 4
const CONST_TASK_4 = 2;
let funcTask4 = function(el) {
  return el % CONST_TASK_4 === 0;
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

filterArray([CONST_TASK_4], funcTask4);

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
const CONST_TASK_6_1 = 2;
const CONST_TASK_6_2 = 7;

function makeListFromRange([a, b]) {
  let newArrFromRange = [];
  for (let i = a; i <= b; i++) {
    newArrFromRange.push(i);
  }
  return newArrFromRange;
}

makeListFromRange([CONST_TASK_6_1, CONST_TASK_6_2]);

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
const CONST_TASK_8_1 = 14;
const CONST_TASK_8_2 = 30;
const CONST_TASK_8_3 = 58;
const arr8 = [CONST_TASK_8_1, CONST_TASK_8_3];

function substitute(arr) {
  return mapArray(arr, function(el) {
    return el < CONST_TASK_8_2 ? '*' : el;
  });
}

substitute(arr8);

// 9
const CONST_TASK_9_1 = 2019;
const CONST_TASK_9_2 = 2;
const date = new Date(CONST_TASK_9_1, 0, CONST_TASK_9_2);
const MILLISECONDS_IN_DAY = 86400000; // 24 * 60 * 60 * 1000

function getPastDay(date, timeDiffDays) {
  const timeDiffMs = timeDiffDays * MILLISECONDS_IN_DAY;
  const prevDateMs = new Date(date.getTime() - timeDiffMs);
  return prevDateMs.getDate();
}

getPastDay(date, CONST_TASK_9_2);

// 10
const CONST_TASK_10 = 10;

function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let year = d.getFullYear();
  let hour = d.getHours();
  let minute = d.getMinutes();

  if (hour < CONST_TASK_10) {
    hour = '0' + hour.toString();
  }
  if (minute < CONST_TASK_10) {
    minute = '0' + minute.toString();
  }

  return [year, month, day].join('/') + ' ' + hour + ':' + minute;
}

formatDate(new Date());
