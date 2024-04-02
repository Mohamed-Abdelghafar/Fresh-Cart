import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }

  ordersNumber:BehaviorSubject<any> = new BehaviorSubject (0)

  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/orders/'

  onlinePayment(cartId:any , userData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl+`checkout-session/${cartId}?url=https://mohamed-abdelghafar.github.io/Fresh-Cart` , {
      shippingAddress : userData
    })
  }

  cashPayment(cartId:any , userData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + cartId , {
      shippingAddress : userData
    })
  }

  userAllOrders(userId:any):Observable<any>
  {
    return this._HttpClient.get(this.baseUrl + 'user/' + userId )
  }
}
 