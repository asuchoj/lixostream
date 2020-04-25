import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDevelopersComponent } from './contact-developers.component';

describe('ContactDevelopersComponent', () => {
  let component: ContactDevelopersComponent;
  let fixture: ComponentFixture<ContactDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
