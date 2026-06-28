import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoEditar } from './agendamento-editar';

describe('AgendamentoEditar', () => {
  let component: AgendamentoEditar;
  let fixture: ComponentFixture<AgendamentoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
