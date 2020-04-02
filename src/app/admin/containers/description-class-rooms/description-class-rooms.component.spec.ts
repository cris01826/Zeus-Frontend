import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionClassRoomsComponent } from './description-class-rooms.component';

describe('DescriptionClassRoomsComponent', () => {
  let component: DescriptionClassRoomsComponent;
  let fixture: ComponentFixture<DescriptionClassRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionClassRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionClassRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
