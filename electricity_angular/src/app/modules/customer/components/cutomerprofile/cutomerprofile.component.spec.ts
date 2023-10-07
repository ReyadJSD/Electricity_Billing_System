import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerprofileComponent } from './cutomerprofile.component';

describe('CutomerprofileComponent', () => {
  let component: CutomerprofileComponent;
  let fixture: ComponentFixture<CutomerprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CutomerprofileComponent]
    });
    fixture = TestBed.createComponent(CutomerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
