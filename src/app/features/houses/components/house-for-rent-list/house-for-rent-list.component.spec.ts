import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseForRentListComponent } from './house-for-rent-list.component';

describe('HousesForRentListComponent', () => {
  let component: HouseForRentListComponent;
  let fixture: ComponentFixture<HouseForRentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseForRentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseForRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
