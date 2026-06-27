import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoCadastrar } from './manutencao-cadastrar';

describe('ManutencaoCadastrar', () => {
  let component: ManutencaoCadastrar;
  let fixture: ComponentFixture<ManutencaoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(ManutencaoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
