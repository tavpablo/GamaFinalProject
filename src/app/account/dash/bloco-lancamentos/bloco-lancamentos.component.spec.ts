import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoLancamentosComponent } from './bloco-lancamentos.component';

describe('BlocoLancamentosComponent', () => {
  let component: BlocoLancamentosComponent;
  let fixture: ComponentFixture<BlocoLancamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoLancamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
