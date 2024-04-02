import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCategoryComponent } from './specific-category.component';

describe('SpecificCategoryComponent', () => {
  let component: SpecificCategoryComponent;
  let fixture: ComponentFixture<SpecificCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecificCategoryComponent]
    });
    fixture = TestBed.createComponent(SpecificCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
