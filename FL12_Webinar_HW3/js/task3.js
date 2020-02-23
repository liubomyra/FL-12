console.log('\n- TASK 3 -------------------------------------');
const jonnyDoe = new SalesManager({
  id: 100,
  firstName: 'Johny',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000
});

const maryDoe = new BlueCollarWorker({
  id: 101,
  firstName: 'Mary',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position: 'office worker',
  department: 'sales'
});

const janeDoe = new BlueCollarWorker({
  id: 102,
  firstName: 'Jane',
  lastName: 'Doe',
  birthday: '10/04/1994',
  salary: 5000,
  position: 'office worker',
  department: 'hr'
});

function ManagerPro(employee) {
  if (!(employee instanceof Manager)) {
    console.log('ManagerPro could be called only for the manager');
    return false;
  }
  Object.assign(employee.constructor.prototype, {
    promote(coworker, benefits) {
      const isManagedEmployee = this.managedEmployees.find(
        e => e.id === coworker.id
      );
      if (!isManagedEmployee) {
        console.log(
          `${coworker.firstName} ${coworker.lastName} can't be promoted by you. You can promote only employees from the '${this.department}' department`
        );
        return false;
      }
      coworker.getPromoted(benefits);
    }
  });
}

ManagerPro(janeDoe); // 'not a manager. Function call should fail'
ManagerPro(jonnyDoe);
jonnyDoe.promote(maryDoe, { salary: 99999 });
jonnyDoe.promote(maryDoe, { department: 'hr' });
jonnyDoe.promote(maryDoe, { salary: 888 }); // not allowed as Mary is not in the 'sales' department anymore
