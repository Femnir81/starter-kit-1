import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
<h1  class="text-center my-5">Benvenuto sulla home page</h1>
  <div class=" my-5 d-flex  justify-content-center">
    <button (click)="gotoActivePosts()" class="btn" >vai a post attivi</button>
    <button (click)="gotoInactivePosts()" class="btn" >vai a post non attivi</button>
  </div>
  `,
  styles: [`
  h1 {
    font-weight: 500;
  }
  button {
    background-color: skyblue;
    box-shadow: 5px 5px 15px 3px black;
    width: 170px;
    margin-right: 3rem;
    margin-left: 3rem;
  }
  `]
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoInactivePosts(){
    this.router.navigate(['/inactive-posts'])
  }
  gotoActivePosts(){
    this.router.navigate(['/active-posts'])
  }

}
