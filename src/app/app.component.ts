import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPosts: Post[] = [
    { title: 'First post', text: 'First text'},
    { title: 'Second post', text: 'Second text'}
  ];
}
