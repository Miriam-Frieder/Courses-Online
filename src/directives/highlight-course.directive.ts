import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app/store/app.state';
import { selectAuthUser } from '../app/store/app.selectors';
import { UserModel } from '../models/user.model';

@Directive({
  selector: '[appHighlightCourse]',
  standalone: true
})
export class HighlightCourseDirective implements OnInit  {
  @Input() appHighlightCourse!: number;

  constructor(private el: ElementRef, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAuthUser).subscribe((authUser: UserModel | null) => {
      if (authUser && authUser.id === this.appHighlightCourse) {
        this.highlight();
      }
    });
  }

  private highlight(): void {
    this.el.nativeElement.style.backgroundColor = 'yellow'; // Change to desired color
  }
}
