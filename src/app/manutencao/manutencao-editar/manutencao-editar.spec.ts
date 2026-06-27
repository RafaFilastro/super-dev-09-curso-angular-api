import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoEditar } from './manutencao-editar';

describe('ManutencaoEditar', () => {
  let component: ManutencaoEditar;
  let fixture: ComponentFixture<ManutencaoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(ManutencaoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
