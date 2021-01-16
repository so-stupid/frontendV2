import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../dto/orders';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private restService: RestService, private http: HttpClient) {
  }

  private url = 'rest/getAllOrders';  // URL to web api

  test: Orders[] = [];

  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.url);
  }
}
