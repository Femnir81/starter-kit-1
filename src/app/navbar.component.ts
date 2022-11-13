import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
          <div><a class="navbar-brand fs-4" href="#">Dashboard</a></div>
          <div><ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
          </ul>
        </div>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-6"
                [routerLink]="['/register']"
                routerLinkActive="active"
                >Register</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  `,
  styles: [`
  nav {
    background-color: skyblue;
    box-shadow: 5px 5px 15px 3px black;
  }
  a {
      color: black;
      border-radius: 5px;
  }
  a.nav-link.fs-6:hover {
    color: black;
    background-color: aliceblue;
    box-shadow: 3px 3px 20px 1px black; 
  }
  a.nav-link.fs-6.active {
    background-color: deepskyblue;
    box-shadow: 3px 3px 20px 1px black;
  }
`],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
