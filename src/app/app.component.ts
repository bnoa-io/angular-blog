import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { CallFakeApiModule } from './modules/call-fake-api.module';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    RouterOutlet,
    CallFakeApiModule,
    PostsComponent,
  ],
  template: `
    <app-posts></app-posts>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'angular-desafio-codelandia-01';
}
