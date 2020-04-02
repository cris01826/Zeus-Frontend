import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProgramsComponent } from './type-programs.component';

describe('TypeProgramsComponent', () => {
  let component: TypeProgramsComponent;
  let fixture: ComponentFixture<TypeProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
