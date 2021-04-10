import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoContaComponent } from './bloco-conta.component';

describe('BlocoContaComponent', () => {
  let component: BlocoContaComponent;
  let fixture: ComponentFixture<BlocoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
