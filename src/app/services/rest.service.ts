import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) {
  }

  private static DEFAULT_PATH = '/rest/';
  private jsonHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

  /**
   * Вызов веб-сервиса
   * @param methodName - имя метода
   * @param params - параметры
   */
  public doCall(methodName: string, params: any): any {
    const url = RestService.DEFAULT_PATH + methodName;
    console.log('calling ' + methodName + ' with params: ', params);
    const options = {
      headers: this.jsonHeaders,
      body: params,
      withCredentials: true
    };
    return this.httpClient.request('POST', url, options)
      .pipe(map((response) => {
        return this.mapResponse(methodName, response);
      }));
  }

  /**
   * Мапинг результата вызова
   */
  private mapResponse(methodName, response): Response {
    console.log(methodName + ' call result: ', response);
    return response;
  }

}
