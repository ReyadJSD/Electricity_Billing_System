import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulthomeComponent } from './defaulthome.component';

describe('DefaulthomeComponent', () => {
  let component: DefaulthomeComponent;
  let fixture: ComponentFixture<DefaulthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaulthomeComponent]
    });
    fixture = TestBed.createComponent(DefaulthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
