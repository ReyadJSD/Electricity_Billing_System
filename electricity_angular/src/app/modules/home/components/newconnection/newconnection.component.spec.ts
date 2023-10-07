import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewconnectionComponent } from './newconnection.component';

describe('NewconnectionComponent', () => {
  let component: NewconnectionComponent;
  let fixture: ComponentFixture<NewconnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewconnectionComponent]
    });
    fixture = TestBed.createComponent(NewconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
