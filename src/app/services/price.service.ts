import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Price} from '../dto/price';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getPriceList';  // URL to web api

  test: Price[] = [
    {id: 1, price: 1, serviceName: '1'},
    {id: 1, price: 1, serviceName: '1'},
  ];

  /**
   * Сохранение услуги
   */
  public savePrice(price: Price): any {
    const params = {
      price
    };
    return this.restService.doCall('savePrice', params);
  }

  /**
   * Геттер для цен
   */
  getPrice(): Observable<Price[]> {
    return this.http.get<Price[]>(this.url);
  }

}
