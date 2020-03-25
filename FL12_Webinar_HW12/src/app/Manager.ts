export class Manager {
  employees: object[] = [];

  addEmployee(child) {
    this.employees.push(child);
  }

  removeEmployee(child) {
    this.employees.splice(this.employees.indexOf(child));
  }
}