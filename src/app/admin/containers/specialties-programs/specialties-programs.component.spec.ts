import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesProgramsComponent } from './specialties-programs.component';

describe('SpecialtiesProgramsComponent', () => {
  let component: SpecialtiesProgramsComponent;
  let fixture: ComponentFixture<SpecialtiesProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtiesProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
