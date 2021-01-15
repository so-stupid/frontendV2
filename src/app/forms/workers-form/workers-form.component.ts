import {Component, OnInit} from '@angular/core';
import {Worker} from '../../dto/worker';
import {TypeWorker} from '../../dto/typeWorker';
import {WorkerService} from '../../services/worker.service';


@Component({
  selector: 'app-workers-form',
  templateUrl: './workers-form.component.html',
  styleUrls: ['./workers-form.component.css']
})
export class WorkersFormComponent implements OnInit {
  public worker: Worker;

  constructor(private workerService: WorkerService) {
    this.worker = new Worker();
    this.worker.typeWorker = new TypeWorker();
  }

  public saveWorker(): any {
    this.workerService.saveWorker(this.worker)
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit(): void {
  }


}
