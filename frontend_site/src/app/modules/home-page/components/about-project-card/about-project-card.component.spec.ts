import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProjectCardComponent } from './about-project-card.component';

describe('AboutProjectCardComponent', () => {
  let component: AboutProjectCardComponent;
  let fixture: ComponentFixture<AboutProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
