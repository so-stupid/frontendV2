import {Component, OnInit} from '@angular/core';
import {Orders} from '../../dto/orders';
import {OrdersService} from '../../services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Orders[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): any {
    return this.ordersService.getAllOrders()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.orders = www.orders);
  }
}
