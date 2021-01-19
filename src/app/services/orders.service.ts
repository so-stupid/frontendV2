import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClient} from '@angular/common/http';
import {Orders} from '../dto/orders';
import {Observable} from 'rxjs';
import {Price} from '../dto/price';
import {Order} from '../dto/Order';
import {Auto} from '../dto/Auto';
import {Client} from '../dto/client';


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

  public saveOrder(order: Order): any {
    const params = {
      order
    };
    return this.restService.doCall('saveOrder', params);
  }

  public saveAuto(auto: Auto): any {
    const params = {
      auto
    };
    return this.restService.doCall('saveAuto', params);
  }

  public saveClient(client: Client): any {
    const params = {
      client
    };
    return this.restService.doCall('saveClient', params);
  }
}
