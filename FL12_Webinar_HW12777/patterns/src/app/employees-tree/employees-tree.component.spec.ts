import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTreeComponent } from './employees-tree.component';

describe('EmployeesTreeComponent', () => {
  let component: EmployeesTreeComponent;
  let fixture: ComponentFixture<EmployeesTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
