import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../../services/worker.service';
import {Worker} from '../../dto/worker';
import {KeycloakService} from 'keycloak-angular';
import {TypeWorker} from '../../dto/typeWorker';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  workers: Worker[];
  types: TypeWorker[];

  constructor(private workerService: WorkerService, private keyService: KeycloakService) {
  }

  ngOnInit(): void {
    this.getWorkers();
    this.getTypeWorkers();
  }


  getWorkers(): any {
    return this.workerService.getWorkers()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.workers = www.workersList
      );
  }

  getTypeWorkers(): any {
    return this.workerService.getTypeWorkers()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.types = www.typeWorkerList
      );
  }

  isAdmin(): boolean {
    return this.keyService.isUserInRole('admin');
  }

  isAuth(): boolean {
    return this.keyService.isUserInRole('user');
  }

}
