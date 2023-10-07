import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilldetailsComponent } from './billdetails.component';

describe('BilldetailsComponent', () => {
  let component: BilldetailsComponent;
  let fixture: ComponentFixture<BilldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilldetailsComponent]
    });
    fixture = TestBed.createComponent(BilldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
