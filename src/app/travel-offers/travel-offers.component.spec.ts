import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOffersComponent } from './travel-offers.component';

describe('TravelOffersComponent', () => {
  let component: TravelOffersComponent;
  let fixture: ComponentFixture<TravelOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
