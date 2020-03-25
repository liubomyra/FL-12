import { Manager } from './Manager'

export class Employee extends Manager {
  id?: number;
  rm_id?: number;
  name: string;
  performance: string;
  last_vacation_date?: string;
  salary: number;
  pool_name: string;

  constructor(data: any) {
    super(); 
    this.id = data.id;
    this.rm_id = data.rm_id;
    this.name = data.name;
    this.performance = data.performance;
    this.last_vacation_date = data.last_vacation_date;
    this.salary = data.salary;
    this.pool_name = data.pool_name;
  }
}