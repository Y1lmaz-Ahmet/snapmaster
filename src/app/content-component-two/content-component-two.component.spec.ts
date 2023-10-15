import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponentTwoComponent } from './content-component-two.component';

describe('ContentComponentTwoComponent', () => {
  let component: ContentComponentTwoComponent;
  let fixture: ComponentFixture<ContentComponentTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponentTwoComponent]
    });
    fixture = TestBed.createComponent(ContentComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
