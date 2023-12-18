import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from '../services/fake-api.service';
import { PostsComponent } from '../pages/posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService)
  ],
  providers: [PostsComponent]
})
export class CallFakeApiModule { }
