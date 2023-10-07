import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustomerComponent } from './updatecustomer.component';

describe('UpdatecustomerComponent', () => {
  let component: UpdatecustomerComponent;
  let fixture: ComponentFixture<UpdatecustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecustomerComponent]
    });
    fixture = TestBed.createComponent(UpdatecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
