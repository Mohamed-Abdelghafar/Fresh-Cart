import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  userData:any = {}

  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/auth/'

  signupApi(userData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signup' , userData)
  }

  signinApi(userData:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'signin' , userData)
  }

  forgotPassword(userEmail:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'forgotPasswords' , userEmail)
  }

   resetCode(code:any):Observable<any>
  {
    return this._HttpClient.post(this.baseUrl + 'verifyResetCode' , code)
  }

   resetPass(userData:any):Observable<any>
  {
    return this._HttpClient.put(this.baseUrl + 'resetPassword' , userData)
  }

  decodeToken(){
    let userToken = localStorage.getItem('user-Token')
    if (userToken != null) {
      this.userData = jwtDecode(userToken)
    }
  }

  updateLoggedUserPassword(userData:any):Observable<any>
  {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword' , userData)
  }

}
