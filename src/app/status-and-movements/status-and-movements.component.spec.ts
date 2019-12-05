import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAndMovementsComponent } from './status-and-movements.component';

describe('StatusAndMovementsComponent', () => {
  let component: StatusAndMovementsComponent;
  let fixture: ComponentFixture<StatusAndMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusAndMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAndMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
