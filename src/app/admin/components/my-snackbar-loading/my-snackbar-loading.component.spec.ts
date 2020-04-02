import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySnackbarLoadingComponent } from './my-snackbar-loading.component';

describe('MySnackbarLoadingComponent', () => {
  let component: MySnackbarLoadingComponent;
  let fixture: ComponentFixture<MySnackbarLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySnackbarLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySnackbarLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
