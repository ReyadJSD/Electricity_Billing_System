import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomerComponent } from './showcustomer.component';

describe('ShowcustomerComponent', () => {
  let component: ShowcustomerComponent;
  let fixture: ComponentFixture<ShowcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcustomerComponent]
    });
    fixture = TestBed.createComponent(ShowcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
