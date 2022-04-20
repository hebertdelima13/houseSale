import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesForRentListComponent } from './houses-for-rent-list.component';

describe('HousesForRentListComponent', () => {
  let component: HousesForRentListComponent;
  let fixture: ComponentFixture<HousesForRentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesForRentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesForRentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
