import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoListar } from './manutencao-listar';

describe('ManutencaoListar', () => {
  let component: ManutencaoListar;
  let fixture: ComponentFixture<ManutencaoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(ManutencaoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
