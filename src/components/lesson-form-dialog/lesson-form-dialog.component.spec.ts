import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFormDialogComponent } from './lesson-form-dialog.component';

describe('LessonFormDialogComponent', () => {
  let component: LessonFormDialogComponent;
  let fixture: ComponentFixture<LessonFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
