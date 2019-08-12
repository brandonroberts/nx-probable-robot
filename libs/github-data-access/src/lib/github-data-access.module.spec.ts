import { async, TestBed } from '@angular/core/testing';
import { GithubDataAccessModule } from './github-data-access.module';

describe('GithubDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GithubDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GithubDataAccessModule).toBeDefined();
  });
});
