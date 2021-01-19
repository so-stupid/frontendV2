import { Component, OnInit } from '@angular/core';
import {Price} from '../../dto/price';
import {PriceService} from '../../services/price.service';
@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.css']
})
export class PriceFormComponent implements OnInit {
  public price: Price;

  constructor(private priceService: PriceService) {
    this.price = new Price();
  }

  public savePrice(): any {
    this.priceService.savePrice(this.price)
      .subscribe((res) => {
        console.log(res);
      });
    alert('Список услуг обновлен');
  }
  ngOnInit(): void {
  }

}
