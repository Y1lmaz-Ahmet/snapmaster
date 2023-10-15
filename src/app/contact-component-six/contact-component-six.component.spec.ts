import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentSixComponent } from './contact-component-six.component';

describe('ContactComponentSixComponent', () => {
  let component: ContactComponentSixComponent;
  let fixture: ComponentFixture<ContactComponentSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponentSixComponent]
    });
    fixture = TestBed.createComponent(ContactComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
