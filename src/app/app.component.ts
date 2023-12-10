import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PostsComponent
  ],
  template: `
    <app-posts></app-posts>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'angular-desafio-codelandia-01';
}
