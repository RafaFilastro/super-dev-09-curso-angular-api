import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicestarefaService } from './servicestarefa.service';

describe('ServicestarefaService', () => {
  let component: ServicestarefaService;
  let fixture: ComponentFixture<ServicestarefaService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicestarefaService],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicestarefaService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
