import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private keycloackService: KeycloakService) {
  }

  ngOnInit(): void {
  }

  isAdmin(): boolean {
    return this.keycloackService.isUserInRole('admin');
  }

  isAuth(): boolean {
    return this.keycloackService.isUserInRole('user');
  }

  logout(): void {
    this.keycloackService.logout('http://localhost:4200/');
  }

}
