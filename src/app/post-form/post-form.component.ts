import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() postAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('inputField') myInput: ElementRef;

  title: '';
  text: '';
  constructor() { }
  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const newPost: Post = {
        title: this.title,
        text: this.text
      };
      this.postAdd.emit(newPost);
      this.title = '';
      this.text = '';
    }
  }
  setGreen(): void {
    this.myInput.nativeElement.style.borderColor = 'red';
  }

}
