import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  template: `
  <div class="container my-5">
  <form #f="ngForm" (ngSubmit)="onSubmit()">
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
  <h3 *ngIf="error">{{ error }}</h3>
  </div>
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
export class LoginPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.form.value);
    this.authService.signin(this.form.value).subscribe(
      data => {
        console.log(data)
        this.error = undefined;
        localStorage.setItem('userLogin', JSON.stringify(data));
      },
      err => {
        console.log(err)
        this.error = err.error
      });
  }

}
