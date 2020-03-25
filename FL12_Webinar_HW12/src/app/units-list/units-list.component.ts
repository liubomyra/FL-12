import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.css']
})
export class UnitsListComponent implements OnInit, OnChanges {
  units: object[];

  @Input() employees: Employee[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.employees.currentValue) {

      const unitsObj = this.employees.reduce((accum, employee) => {
        const { pool_name = 'unset' } = employee;
        if (!accum[pool_name]) {
          accum[pool_name] = [];
        }
        accum[pool_name].push(employee);
        return accum;
      }, {});


      this.units = Object.entries(unitsObj).map(function([key, value]) {
        return {name: key, employees: value};
      });
    }
  }
}
