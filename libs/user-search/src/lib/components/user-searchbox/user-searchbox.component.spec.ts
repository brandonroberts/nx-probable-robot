import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchboxComponent } from './user-searchbox.component';

describe('UserSearchboxComponent', () => {
  let component: UserSearchboxComponent;
  let fixture: ComponentFixture<UserSearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
