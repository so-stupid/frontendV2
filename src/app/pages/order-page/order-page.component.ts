import {Component, OnInit} from '@angular/core';
import {Order} from '../../dto/Order';
import {Client} from '../../dto/client';
import {Auto} from '../../dto/Auto';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  order: Order;

  constructor() {
    this.order = new Order();
    this.order.auto = new Auto();
    this.order.client = new Client();
  }

  ngOnInit(): void {
  }

  saveOrder(): any {
    console.log('done');
  }

}
