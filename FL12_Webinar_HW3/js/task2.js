class Employee {
  constructor({
    id,
    firstName,
    lastName,
    birthday,
    salary,
    position,
    department
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
    this.department = department;

    Employee.EMPLOYEES.push(this);
  }

  static _EMPLOYEES = [];

  get age() {
    const diff = Date.now - new Date(this.birthday).getTime();
    return parseInt(String(diff / (1000 * 60 * 60 * 24 * 365)), 10);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static get EMPLOYEES() {
    return this._EMPLOYEES;
  }
  static set EMPLOYEES(x) {
    this._EMPLOYEES.push(x);
  }
  quit() {
    const thisIndex = Employee._EMPLOYEES.findIndex(e => e.id === this.id);
    if (thisIndex === -1) {
      return false;
    }
    Employee._EMPLOYEES.splice(thisIndex, 1);
  } //- remove the employee from EMPLOYEES;
  retire() {
    this.quit();
    console.log('It was such a pleasure to work with you!');
  } //- log a message and remove from EMPLOYEES;
  getFired() {
    this.quit();
    console.log('Not a big deal!');
  } //- log a message and remove from EMPLOYEES;
  changeDepartment(newDepartment) {
    this.department = newDepartment;
  }
  changePosition(newPosition) {
    this.position = newPosition;
  }
  changeSalary(newSalary) {
    this.salary = newSalary;
  }
  updateProps(newProps) {
    if (typeof newProps.salary !== 'undefined') {
      this.changeSalary(newProps.salary);
    }
    if (typeof newProps.position !== 'undefined') {
      this.changePosition(newProps.position);
    }
    if (typeof newProps.department !== 'undefined') {
      this.changeDepartment(newProps.department);
    }
  }
  getPromoted(benefits) {
    this.updateProps(benefits);
    console.log('Yoohooo!');
  }
  getDemoted(punishment) {
    this.updateProps(punishment);
    console.log('Damn!');
  }
}

class Manager extends Employee {
  constructor({ id, firstName, lastName, birthday, salary, department }) {
    super({ id, firstName, lastName, birthday, salary, department });
    this.position = 'manager';
    const managerOfEmployees = this.constructor.managedEmployees;
    this.managerOfEmployees = managerOfEmployees;
  }
  get managedEmployees() {
    debugger;
    const managedEmployees1 = Employee._EMPLOYEES.filter(
      e => !(e instanceof Manager) && e.department === this.department
    );
  }
}

class BlueCollarWorker extends Employee {
  constructor({
    id,
    firstName,
    lastName,
    birthday,
    salary,
    position,
    department
  }) {
    super({ id, firstName, lastName, birthday, salary, position, department });
  }
}

class HRManager extends Manager {
  constructor({ id, firstName, lastName, birthday, salary }) {
    super({ id, firstName, lastName, birthday, salary });
    this.department = 'hr';
  }
}

class SalesManager extends Manager {
  constructor({ id, firstName, lastName, birthday, salary }) {
    super({ id, firstName, lastName, birthday, salary });
    this.department = 'sales';
  }
}

const salesManagerOne = new SalesManager({
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  department: 'sales'
});

const salesManagerTwo = new SalesManager({
  id: 10,
  firstName: 'Johny',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  department: 'sales'
});

const hrManager = new HRManager({
  id: 2,
  firstName: 'Bob',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  department: 'sales'
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

// console.log(blueCollarWorkerOne);
// console.log(hrManager);

const benefits1 = {
  salary: 7000,
  position: 'office manager'
};

console.log(salesManagerOne);
console.log(salesManagerOne.getPromoted(benefits1));
console.log(salesManagerOne);

function ManagerPro(employee) {
  if (!(employee instanceof Manager)) {
    return false;
  }
  // Object.assign(employee.prototype, {
  //   promote(coworker, benefits) {
  //     const isManagedEmployee = employee.managedEmployees.find(
  // e => e.id === coworker.id
  // );
  // if (!isManagedEmployee) {
  //   return false;
  // }
  // coworker.getPromoted(benefits);
  //   }
  // });
  employee.constructor.prototype.promote = function(coworker, benefits) {
    const isManagedEmployee =
      employee.managedEmployees &&
      employee.managedEmployees.find(e => e.id === coworker.id);
    if (!isManagedEmployee) {
      return false;
    }
    coworker.getPromoted(benefits);
  };
}

ManagerPro(hrManager);
