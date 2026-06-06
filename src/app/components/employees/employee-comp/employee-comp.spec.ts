import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComp } from './employee-comp';

describe('EmployeeComp', () => {
  let component: EmployeeComp;
  let fixture: ComponentFixture<EmployeeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
