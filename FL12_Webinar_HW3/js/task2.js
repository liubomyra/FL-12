console.log('\n- TASK 2 -------------------------------------');

const salesManagerOne = new SalesManager({
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
});

const salesManagerTwo = new SalesManager({
  id: 10,
  firstName: 'Johny',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
});

const hrManager = new HRManager({
  id: 2,
  firstName: 'Bob',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
});

const blueCollarWorkerOne = new BlueCollarWorker({
  id: 3,
  firstName: 'Mary',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position: 'office worker',
  department: 'sales'
});

const blueCollarWorkerTwo = new BlueCollarWorker({
  id: 4,
  firstName: 'Jane',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position: 'office worker',
  department: 'hr'
});

console.log(
  `salesManagerTwo Employees: ${salesManagerTwo.managedEmployees
    .map(e => `${hrManager.firstName} ${hrManager.lastName}`)
    .join(',')}`
);
console.log(`${hrManager.firstName} ${hrManager.lastName} is getDemoted`);
hrManager.getDemoted({ salary: 10 });
console.log(
  `${blueCollarWorkerTwo.firstName} ${hrManager.blueCollarWorkerTwo} is fired`
);
blueCollarWorkerTwo.getFired();
