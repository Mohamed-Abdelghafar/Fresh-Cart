import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDetailsComponent } from './cash-details.component';

describe('CashDetailsComponent', () => {
  let component: CashDetailsComponent;
  let fixture: ComponentFixture<CashDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CashDetailsComponent]
    });
    fixture = TestBed.createComponent(CashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
