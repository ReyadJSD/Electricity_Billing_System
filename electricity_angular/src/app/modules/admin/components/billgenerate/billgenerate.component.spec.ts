import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillgenerateComponent } from './billgenerate.component';

describe('BillgenerateComponent', () => {
  let component: BillgenerateComponent;
  let fixture: ComponentFixture<BillgenerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillgenerateComponent]
    });
    fixture = TestBed.createComponent(BillgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
