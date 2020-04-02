import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsUsersComponent } from './subjects-users.component';

describe('SubjectsUsersComponent', () => {
  let component: SubjectsUsersComponent;
  let fixture: ComponentFixture<SubjectsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
