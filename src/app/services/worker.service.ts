import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Worker} from '../dto/worker';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  constructor(private restService: RestService, private http: HttpClient) {
  }

  private heroesUrl = 'rest/getWorkersList';  // URL to web api

  test: Worker[] = [
    {id: 1, typeWorker: {id: null, type: 'Упала'}, phoneNumber: 0, fullName: 'Дружище', address: 'База'},
    {id: 1, typeWorker: {id: null, type: 'Упала'}, phoneNumber: 0, fullName: 'Дружище', address: 'База'},
  ];

  /**
   * Сохранение рабочего
   */
  public saveWorker(worker: Worker): any {
    const params = {
      worker
    };
    return this.restService.doCall('saveWorker', params);
  }

  /**
   * Геттер для рабочих
   */
  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.heroesUrl);
  }
}
