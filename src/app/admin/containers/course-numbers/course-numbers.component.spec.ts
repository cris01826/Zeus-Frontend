import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNumbersComponent } from './course-numbers.component';

describe('CourseNumbersComponent', () => {
  let component: CourseNumbersComponent;
  let fixture: ComponentFixture<CourseNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
