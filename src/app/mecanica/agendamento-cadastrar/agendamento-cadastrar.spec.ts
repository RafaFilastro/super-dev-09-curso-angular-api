import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoCadastrar } from './agendamento-cadastrar';

describe('AgendamentoCadastrar', () => {
  let component: AgendamentoCadastrar;
  let fixture: ComponentFixture<AgendamentoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
