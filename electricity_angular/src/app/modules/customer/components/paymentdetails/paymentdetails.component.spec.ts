import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdetailsComponent } from './paymentdetails.component';

describe('PaymentdetailsComponent', () => {
  let component: PaymentdetailsComponent;
  let fixture: ComponentFixture<PaymentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentdetailsComponent]
    });
    fixture = TestBed.createComponent(PaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
