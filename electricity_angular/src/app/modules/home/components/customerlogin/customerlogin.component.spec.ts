import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerloginComponent } from './customerlogin.component';

describe('CustomerloginComponent', () => {
  let component: CustomerloginComponent;
  let fixture: ComponentFixture<CustomerloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerloginComponent]
    });
    fixture = TestBed.createComponent(CustomerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
