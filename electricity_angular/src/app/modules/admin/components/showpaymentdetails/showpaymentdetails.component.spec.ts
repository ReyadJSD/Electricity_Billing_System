import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpaymentdetailsComponent } from './showpaymentdetails.component';

describe('ShowpaymentdetailsComponent', () => {
  let component: ShowpaymentdetailsComponent;
  let fixture: ComponentFixture<ShowpaymentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowpaymentdetailsComponent]
    });
    fixture = TestBed.createComponent(ShowpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
