import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  template: `
    <div class="container my-5">
      <ng-container *ngIf="post; else elseTemplate">
        <div class="card mb-4">
          <h1 class="text-center mt-4 mb-3">
          {{ post.title }}
          </h1>
          <div class="card-body">
            <p>{{post.body}}</p>
            <p><span>Categoria:</span> {{post.type}}</p>
            <p><span>Autore:</span> {{post.author}}</p>
          </div>
        </div>
      </ng-container>
    </div>
    <ng-template #elseTemplate>
      <h1 class="text-center mt-5">post non trovato</h1>
    </ng-template>
  `,
  styles: [`
  .container {
    max-width: 800px;
  }
  .card {
    background-color: skyblue;
    box-shadow: 5px 5px 15px 3px black;    
  }
  span {
    font-weight: 500;
  }
  `],
})
export class PostDetailsPage implements OnInit {
  sub!: Subscription;
  post: Post | undefined;
  constructor(private router: ActivatedRoute, private postsSrv: PostsService) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params) => {
      const id = +params['id'];
      console.log(id);
      //this.post = this.postsSrv.getPost(id);
      this.postsSrv.getPost(id).subscribe(data => this.post = data)
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
