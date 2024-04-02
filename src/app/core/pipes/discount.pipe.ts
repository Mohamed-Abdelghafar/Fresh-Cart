import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(price:number , priceAfterSale:number): unknown {
    if (priceAfterSale == Number(priceAfterSale)) {
      return Math.floor(-(((price - priceAfterSale) * 100) / price))
    }
    else {
      return 0
    }
     ;
  }

}
