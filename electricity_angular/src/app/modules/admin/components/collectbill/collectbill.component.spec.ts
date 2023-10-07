import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectbillComponent } from './collectbill.component';

describe('CollectbillComponent', () => {
  let component: CollectbillComponent;
  let fixture: ComponentFixture<CollectbillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectbillComponent]
    });
    fixture = TestBed.createComponent(CollectbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
