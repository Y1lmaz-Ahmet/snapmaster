import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsComponentThreeComponent } from './locations-component-three.component';

describe('LocationsComponentThreeComponent', () => {
  let component: LocationsComponentThreeComponent;
  let fixture: ComponentFixture<LocationsComponentThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsComponentThreeComponent]
    });
    fixture = TestBed.createComponent(LocationsComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
