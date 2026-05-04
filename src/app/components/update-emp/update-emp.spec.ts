import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmp } from './update-emp';

describe('UpdateEmp', () => {
  let component: UpdateEmp;
  let fixture: ComponentFixture<UpdateEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
