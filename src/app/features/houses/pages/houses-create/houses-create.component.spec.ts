import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCreateComponent } from './houses-create.component';

describe('HousesCreateComponent', () => {
  let component: HousesCreateComponent;
  let fixture: ComponentFixture<HousesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
