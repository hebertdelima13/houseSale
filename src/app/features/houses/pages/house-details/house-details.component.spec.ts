import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailsComponent } from './house-details.component';

describe('HousesDetailsComponent', () => {
  let component: HouseDetailsComponent;
  let fixture: ComponentFixture<HouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
