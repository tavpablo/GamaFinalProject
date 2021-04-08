import { TestBed } from '@angular/core/testing';

import { ControleSessaoGuard } from './controle-sessao.guard';

describe('ControleSessaoGuard', () => {
  let guard: ControleSessaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControleSessaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
