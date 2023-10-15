import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationComponentFourComponent } from './recommendation-component-four.component';

describe('RecommendationComponentFourComponent', () => {
  let component: RecommendationComponentFourComponent;
  let fixture: ComponentFixture<RecommendationComponentFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationComponentFourComponent]
    });
    fixture = TestBed.createComponent(RecommendationComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
