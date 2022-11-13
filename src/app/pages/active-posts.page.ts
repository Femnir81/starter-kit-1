import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post" >
        <button (click)="onInactivePost(post.id,i)" class="btn" >Disattiva </button>
        <button [routerLink]="['/active-posts',post.id]" routerLinkActive="router-link-active"  class="btn" >Dettagli </button>
        </app-post-card>
      </div>
    </div>
  `,
  styles: [`
  button {
    background-color: skyblue;
    box-shadow: 3px 3px 15px 2px black;
    width: 100px;
    margin-right: 1rem;
    margin-left: 0rem;
    margin-top: 0.8rem;
    font-size: 1rem;
  }
  .btn:hover {
    background-color: aliceblue;
  }
  `],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor(private postsSrv:PostsService) {}

  async ngOnInit() {
    //const posts = await this.postsSrv.getPosts()
    //this.posts = posts;
    this.postsSrv.getPosts().subscribe(data => this.posts = data);
    console.log(this.posts);
  }

  onInactivePost(id:number,i:number){
    /* this.postsSrv.updatePost({active:false},id) */
    this.postsSrv.updatePost({active:false},id).subscribe(data => console.log(data))
    this.posts.splice(i,1)
  }
}
