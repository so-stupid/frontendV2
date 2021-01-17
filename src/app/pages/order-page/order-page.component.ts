import {Component, OnInit} from '@angular/core';
import {Order} from '../../dto/Order';
import {Client} from '../../dto/client';
import {Auto} from '../../dto/Auto';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  order: Order;

  constructor(private ordersService: OrdersService) {
    this.order = new Order();
    this.order.auto = new Auto();
    this.order.client = new Client();
  }

  ngOnInit(): void {
  }

  saveOrder(): any {
    console.log('done');
    // this.ordersService.saveOrder(this.order);
  }

}
