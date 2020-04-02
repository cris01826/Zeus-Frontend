import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesUsersComponent } from './specialties-users.component';

describe('SpecialtiesUsersComponent', () => {
  let component: SpecialtiesUsersComponent;
  let fixture: ComponentFixture<SpecialtiesUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtiesUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
