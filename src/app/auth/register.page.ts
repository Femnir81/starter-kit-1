import { AuthService } from './auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="container my-5">
    <form #f="ngForm" (ngSubmit)="onSubmit()">
      <div class="mb-3">
        <label for="firstname" class="form-label fs-6">Firstname</label>
        <input type="text" ngModel name="firstname" class="form-control" id="firstname" >
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label fs-6">Lastname</label>
        <input type="text" ngModel name="lastname" class="form-control" id="lastname">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label fs-6">Email</label>
        <input type="email" ngModel name="email" class="form-control" id="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label fs-6">Password</label>
        <input type="password" ngModel name="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
  <h3 *ngIf="error">{{ error }}</h3>

  `,
  styles: [`
  .container {
    max-width: 500px;
  }
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
  input {
    box-shadow: 3px 3px 15px 2px black;
  }
  `]
})
export class RegisterPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.form.value);
    this.authService.signup(this.form.value).subscribe(
      data => {
        console.log(data)
        this.error = undefined;
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err)
        this.error = err
      });
  }

}
