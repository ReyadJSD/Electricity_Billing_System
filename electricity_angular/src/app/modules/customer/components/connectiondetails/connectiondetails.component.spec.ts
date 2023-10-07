import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectiondetailsComponent } from './connectiondetails.component';

describe('ConnectiondetailsComponent', () => {
  let component: ConnectiondetailsComponent;
  let fixture: ComponentFixture<ConnectiondetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectiondetailsComponent]
    });
    fixture = TestBed.createComponent(ConnectiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
