import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-cash-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cash-details.component.html',
  styleUrls: ['./cash-details.component.scss']
})
export class CashDetailsComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder , private _AuthService:AuthService, private _CartService: CartService, private _PaymentService: PaymentService, private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  detailsForm: FormGroup = this._FormBuilder.group({
    'details': [null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
    'phone': [null, [Validators.required, Validators.pattern(/^01[0,1,2,5][0-9]{8}$/)]],
    'city': [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
  })

  cartId: any = ''
  allOrdersNumbers: number = 0
  userId:string = ''

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.cartId = param.get('id')
      },
      error: (err) => {
      }
    })
  }

  completePayment() {
    this._PaymentService.cashPayment(this.cartId, this.detailsForm.value).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this._Router.navigate(['./allorders'])   
          this._AuthService.decodeToken()
          this.userId = this._AuthService.userData.id
          this._PaymentService.userAllOrders(this.userId).subscribe({
            next: (response) => {
              this.allOrdersNumbers = response.length
              console.log(this.allOrdersNumbers);
              this._PaymentService.ordersNumber.next(this.allOrdersNumbers)
            },
            error: (err) => {      
            }
          })
          this._CartService.cartItemsNumber.next(0)
        }
      },
      error: (err) => {
      }
    })
  }

}
