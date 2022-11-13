import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
    <div class="container mt-4">
      <ul class="list-group">
        <li [routerLink]="[user.id]" routerLinkActive="active"
            class="list-group-item fs-6" *ngFor="let user of users">
          {{ user.firstname }} {{ user.lastname }}
        </li>
      </ul>
      <hr class="my-4"/>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  .container {
    max-width: 500px;
  }
  li {
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid black;
    background-color: skyblue;
    cursor: pointer;
    color: black;
    box-shadow: 5px 5px 8px 1px black;
  }
  li:hover {
    background-color: aliceblue;
  }
  .list-group-item {
    border-top-width: 1px;
  }
  .list-group-item.active{
    background-color: deepskyblue;
    margin-top: 4px;
    border-color: black;
    color: black;
    font-weight: 500;
  }
  `],
})
export class UsersPage implements OnInit {
  users!: User[];
  constructor(private usersSrv: UsersService) {}

  ngOnInit(): void {
    //this.users = this.usersSrv.getUsers();
    this.usersSrv.getUsers().subscribe(data => this.users = data)
  }
}
