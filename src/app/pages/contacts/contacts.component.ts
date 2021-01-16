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

  constructor(private workerService: WorkerService, private keyService: KeycloakService) {
  }

  ngOnInit(): void {
    this.getWorkers();
  }


  getWorkers(): any {
    return this.workerService.getWorkers()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.workers = www.workersList
      );
  }

  isAdmin(): boolean {
    return this.keyService.isUserInRole('admin');
  }

  isAuth(): boolean {
    return this.keyService.isUserInRole('user');
  }

}
