import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoShoppingComponent } from './go-shopping.component';

describe('GoShoppingComponent', () => {
  let component: GoShoppingComponent;
  let fixture: ComponentFixture<GoShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
