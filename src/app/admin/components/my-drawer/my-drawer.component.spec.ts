import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDrawerComponent } from './my-drawer.component';

describe('MyDrawerComponent', () => {
  let component: MyDrawerComponent;
  let fixture: ComponentFixture<MyDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
