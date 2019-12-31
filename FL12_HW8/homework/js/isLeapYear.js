function isLeapYear(inputString) {
  let inputDate = new Date(inputString);
  if (!(inputDate instanceof Date) || isNaN(inputDate)) {
    return 'Invalid Date';
  }
  let year = inputDate.getFullYear();
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + ' is a leap year';
  } else {
    return year + ' is not a leap year';
  }
}

isLeapYear();
