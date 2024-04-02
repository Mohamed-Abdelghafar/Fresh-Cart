import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  cartItemsNumber:BehaviorSubject<number> = new BehaviorSubject(0)

  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/cart/'

  addToCart(id:string):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl ,{productId:id})
  }

  getUserCart():Observable<any>
  {
    return this._HttpClient.get(this.baseUrl)
  }
  
  deleteItem(itemId:any):Observable<any>
  {
    return this._HttpClient.delete(this.baseUrl+itemId)
  }

  updateItemCount(itemId:any , itemCount:any):Observable<any>
  {
    return this._HttpClient.put(this.baseUrl + itemId , {count : itemCount})
  }

  deleteCart():Observable<any>
  {
    return this._HttpClient.delete(this.baseUrl)
  }
}
