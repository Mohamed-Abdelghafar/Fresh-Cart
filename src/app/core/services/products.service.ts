import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/products/'

  getAllProducts(pageNum:number = 1):Observable<any>
  {
    return this._HttpClient.get(this.baseUrl + `?page=${pageNum}`)
  }

  getSpecificProduct(id:string):Observable<any>
  {
    return this._HttpClient.get(this.baseUrl+id)
  }
}
