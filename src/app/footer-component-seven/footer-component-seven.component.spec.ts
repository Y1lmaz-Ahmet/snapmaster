import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentSevenComponent } from './footer-component-seven.component';

describe('FooterComponentSevenComponent', () => {
  let component: FooterComponentSevenComponent;
  let fixture: ComponentFixture<FooterComponentSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentSevenComponent]
    });
    fixture = TestBed.createComponent(FooterComponentSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
