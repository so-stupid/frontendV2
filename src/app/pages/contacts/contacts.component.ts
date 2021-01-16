import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../../services/worker.service';
import {Worker} from '../../dto/worker';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  workers: Worker[];
  private keyService: KeycloakService;

  constructor(private workerService: WorkerService, keyService: KeycloakService) {
    this.keyService = keyService;
  }

  ngOnInit(): void {
    this.getWorkers();
  }

  isAdmin(): boolean {
    return this.keyService.isUserInRole('admin');
  }

  isAuth(): boolean {
    return this.keyService.isUserInRole('user');
  }

  getWorkers(): any {
    return this.workerService.getWorkers()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.workers = www.workersList
      );
  }
}
