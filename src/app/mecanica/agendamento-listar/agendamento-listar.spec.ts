import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoListar } from './agendamento-listar';

describe('AgendamentoListar', () => {
  let component: AgendamentoListar;
  let fixture: ComponentFixture<AgendamentoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
