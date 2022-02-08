import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoInputFieldComponent } from './to-do-input-field.component';

describe('ToDoInputFieldComponent', () => {
  let component: ToDoInputFieldComponent;
  let fixture: ComponentFixture<ToDoInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
