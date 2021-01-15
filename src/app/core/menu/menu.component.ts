import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private keycloackService: KeycloakService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.keycloackService.logout('http://localhost:4200/');
  }

}
