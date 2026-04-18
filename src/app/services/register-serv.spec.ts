import { TestBed } from '@angular/core/testing';

import { RegisterServ } from './register-serv';

describe('RegisterServ', () => {
  let service: RegisterServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
