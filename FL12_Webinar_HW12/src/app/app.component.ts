import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Employee[]>("https://roman4ak.github.io/fe-oop-lab/mocks/epms.json")
      .subscribe(employeesData => {
        const employees = employeesData.map(emData => {
          return new Employee(emData);
        });
        
        employees.map(em => {
          const manager = employees.find(man => em.rm_id && man.id === em.rm_id
          );
          return manager && manager.addEmployee(em);
        });
    
        this.employees = employees;
      });
  }
}
