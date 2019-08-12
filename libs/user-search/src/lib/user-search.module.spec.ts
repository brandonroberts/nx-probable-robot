import { async, TestBed } from '@angular/core/testing';
import { UserSearchModule } from './user-search.module';

describe('UserSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UserSearchModule).toBeDefined();
  });
});
