import {Component, OnInit} from '@angular/core';
import {PriceService} from '../../services/price.service';
import {Price} from '../../dto/price';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  prices: Price[];

  constructor(private priceService: PriceService) {
  }

  ngOnInit(): void {
    this.getPrice();
  }

  getPrice(): any {
    return this.priceService.getPrice()
      // @ts-ignore TODO Разберись с беком
      .subscribe(ppp => this.prices = ppp.priceList);
  }

}
