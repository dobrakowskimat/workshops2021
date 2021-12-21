import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookDialogWrapperComponent } from './edit-book-dialog-wrapper.component';

describe('EditBookDialogWrapperComponent', () => {
  let component: EditBookDialogWrapperComponent;
  let fixture: ComponentFixture<EditBookDialogWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookDialogWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookDialogWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
