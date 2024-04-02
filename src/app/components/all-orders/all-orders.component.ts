import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from 'src/app/core/services/payment.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit{
  constructor(private _PaymentService:PaymentService , private _AuthService:AuthService){}
  userId:string = ''
  allOrders:any
  orderItems:boolean = false


  ngOnInit(): void {
    this._AuthService.decodeToken()
    this.userId = this._AuthService.userData.id
    this._PaymentService.userAllOrders(this.userId).subscribe({
      next:(response)=>{
        this.allOrders = response
        if (response.length == 0) {
          this.orderItems = true
        }
        this._PaymentService.ordersNumber.next(response.length)
      },
      error:(err)=>{
        console.log(err);        
      }
    })
  }
}
