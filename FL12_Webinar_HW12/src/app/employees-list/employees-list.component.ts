import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../Employee';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnChanges {
  topManagers: Employee[];

  @Input() employees: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.employees.currentValue) {
      this.topManagers = this.employees.filter( manager => manager.rm_id === null); 
    }
  }

}
