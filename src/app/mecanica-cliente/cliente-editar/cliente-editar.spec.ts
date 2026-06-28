import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditar } from './cliente-editar';

describe('ClienteEditar', () => {
  let component: ClienteEditar;
  let fixture: ComponentFixture<ClienteEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
