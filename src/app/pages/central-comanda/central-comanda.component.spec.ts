import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralComandaComponent } from './central-comanda.component';

describe('CentralComandaComponent', () => {
  let component: CentralComandaComponent;
  let fixture: ComponentFixture<CentralComandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralComandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
