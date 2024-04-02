import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdderssComponent } from './user-adderss.component';

describe('UserAdderssComponent', () => {
  let component: UserAdderssComponent;
  let fixture: ComponentFixture<UserAdderssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserAdderssComponent]
    });
    fixture = TestBed.createComponent(UserAdderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
