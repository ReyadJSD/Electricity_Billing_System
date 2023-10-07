import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchreceiptComponent } from './searchreceipt.component';

describe('SearchreceiptComponent', () => {
  let component: SearchreceiptComponent;
  let fixture: ComponentFixture<SearchreceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchreceiptComponent]
    });
    fixture = TestBed.createComponent(SearchreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
