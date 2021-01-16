import {Component, OnInit} from '@angular/core';
import {Orders} from '../../dto/orders';
import {OrdersService} from '../../services/orders.service';
import {timeConverter} from '../../utils/time.util';
import {UserService} from '../../services/user.service';
import {User} from '../../dto/User';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Orders[];
  user: User = {lastName: '1', email: '1', emailVerified: false, firstName: '1', username: '2'};

  constructor(private ordersService: OrdersService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  toTime(temp): any {
    return timeConverter(temp);
  }

  getAllOrders(): any {
    return this.ordersService.getAllOrders()
      // @ts-ignore TODO Разберись с беком
      .subscribe(www => this.orders = www.orders);
  }
}
