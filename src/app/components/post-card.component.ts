import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  template: `
    <div
      [ngClass]="{
        'bg-warning': post.type == 'news',
        'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic',
        'text-dark': post.type == 'politic'
      }"
      class="card mb-4"
    >
      <h5 class="card-header fs-6">Post</h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title | maiuscolo }}</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        <ng-content></ng-content>
        
      </div>
    </div>
  `,
  styles: [`
  .bg-warning {
    background-color: papayawhip !important;
  }
  .bg-info {
    background-color: lightskyblue !important;
  }
  .bg-dark {
    background-color: salmon !important;
  }
  .text-dark {
    color: black !important;
  }
  .card {
    box-shadow: 5px 5px 15px 3px black;
  }
  `],
})
export class PostCardComponent implements OnInit {
  @Input() post!: Post;
  @Input() bgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
