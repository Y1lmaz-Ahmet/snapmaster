import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesPortfolioComponentFiveComponent } from './pictures-portfolio-component-five.component';

describe('PicturesPortfolioComponentFiveComponent', () => {
  let component: PicturesPortfolioComponentFiveComponent;
  let fixture: ComponentFixture<PicturesPortfolioComponentFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesPortfolioComponentFiveComponent]
    });
    fixture = TestBed.createComponent(PicturesPortfolioComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
