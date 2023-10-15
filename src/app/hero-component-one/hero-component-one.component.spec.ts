import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponentOneComponent } from './hero-component-one.component';

describe('HeroComponentOneComponent', () => {
  let component: HeroComponentOneComponent;
  let fixture: ComponentFixture<HeroComponentOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponentOneComponent]
    });
    fixture = TestBed.createComponent(HeroComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
