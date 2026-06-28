import { TestBed } from '@angular/core/testing';

import { ClienteMecanicaService } from './cliente-mecanica.service';

describe('ClienteMecanicaService', () => {
  let service: ClienteMecanicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteMecanicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
