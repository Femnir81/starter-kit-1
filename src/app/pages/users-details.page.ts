import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
    <ng-container *ngIf="user; else elseTemplate">
     
    <table class="table">
	    <thead>
		    <tr>
			    <th class="fs-6" scope="col">Name</th>
			    <th class="fs-6" scope="col">Email</th>
		    </tr>
	    </thead>
	    <tbody>
		    <tr>
			    <td class="fs-6">{{ user.firstname }} {{ user.lastname }}</td>
			    <td class="fs-6">{{ user.email }}</td>
		    </tr>
	    </tbody>
    </table>
    </ng-container>
    <ng-template #elseTemplate>
      <p>utente non trovato</p>
    </ng-template>

  `,
  styles: [`
  table {
    background-color: lightskyblue;
    border: 1px solid black;
  }
  `]
})
export class UsersDetailsPage implements OnInit {
user:User|undefined
  constructor(private router:ActivatedRoute, private userSrv:UsersService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      const id = +params['id']
      //this.user = this.userSrv.getUser(id)
      this.userSrv.getUser(id).subscribe(data => this.user = data);
    })
  }

}
