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
    this.saveAuto();
    this.saveClient();
    this.ordersService.saveOrder(this.order)
      .subscribe((res) => {
        console.log(res);
      });
    alert('Заказ добавлен');
  }

  saveAuto(): any {
    this.ordersService.saveAuto(this.order.auto)
      .subscribe((res) => {
        console.log(res);
      });
  }

  saveClient(): any {
    this.ordersService.saveClient(this.order.client)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
