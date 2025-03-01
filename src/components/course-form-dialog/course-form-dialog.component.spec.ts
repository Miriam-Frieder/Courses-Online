import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormDialogComponent } from './course-form-dialog.component';

describe('CourseFormDialogComponent', () => {
  let component: CourseFormDialogComponent;
  let fixture: ComponentFixture<CourseFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFormDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
