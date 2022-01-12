import { TestBed } from '@angular/core/testing';

import { CanLoadUsersGuard } from './can-load-users.guard';

describe('CanLoadUsersGuard', () => {
  let guard: CanLoadUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
