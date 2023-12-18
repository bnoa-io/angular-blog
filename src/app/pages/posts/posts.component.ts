import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  providers: [],
  imports:[CommonModule, FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts:any;
  backupPosts:any;
  search: string = '';

  constructor(private connection: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts():any {
    this.connection.get('api/posts').subscribe({
      next: (response) => {
        this.backupPosts = response;
        this.posts = response;
      },
      error: (error) => console.log(error)
    });
  }

  onSearchChange(currentValue: string): void {
    // add debounce here
    this.posts = this.backupPosts.filter((el:any) => el.postedAt.includes(currentValue) || el.content.includes(currentValue) || el.title.includes(currentValue));
  }
}
