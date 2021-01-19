import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Worker} from '../dto/worker';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypeWorker} from '../dto/typeWorker';


@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getWorkersList';  // URL to web api
  private typeUrl = 'rest/getTypeWorkerList';  // URL to web api

  test: Worker[] = [];
  types: TypeWorker[] = [];
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
    return this.http.get<Worker[]>(this.url);
  }

  getTypeWorkers(): Observable<TypeWorker[]> {
    return this.http.get<TypeWorker[]>(this.typeUrl);
  }
}
