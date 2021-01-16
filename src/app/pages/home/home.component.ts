import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private keyService: KeycloakService) {
  }


  ngOnInit(): void {
    console.log(this.isAuth());
  }

  isAuth(): boolean {
    return this.keyService.isUserInRole('user');
  }
}

