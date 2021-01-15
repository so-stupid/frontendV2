import {Component, OnInit} from '@angular/core';
import {WorkerService} from '../../services/worker.service';
import {Worker} from '../../dto/worker';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  workers: Worker[];

  constructor(private workerService: WorkerService) {
  }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): any {
    return this.workerService.getWorkers()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www =>  this.workers = www.workersList
  );
  }
}
