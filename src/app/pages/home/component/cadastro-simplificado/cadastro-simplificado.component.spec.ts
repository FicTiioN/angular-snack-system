import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSimplificadoComponent } from './cadastro-simplificado.component';

describe('CadastroSimplificadoComponent', () => {
  let component: CadastroSimplificadoComponent;
  let fixture: ComponentFixture<CadastroSimplificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroSimplificadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSimplificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
