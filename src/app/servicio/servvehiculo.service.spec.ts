import { TestBed } from '@angular/core/testing';

import { ServvehiculoService } from './servvehiculo.service';

describe('ServinstrumentoService', () => {
  let service: ServvehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServvehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
