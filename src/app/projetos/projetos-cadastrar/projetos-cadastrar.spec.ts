import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosCadastrar } from './projetos-cadastrar';

describe('ProjetosCadastrar', () => {
  let component: ProjetosCadastrar;
  let fixture: ComponentFixture<ProjetosCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetosCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
