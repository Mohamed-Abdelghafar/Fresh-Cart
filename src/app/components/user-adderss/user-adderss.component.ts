import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/core/services/payment.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-user-adderss',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ],
  templateUrl: './user-adderss.component.html',
  styleUrls: ['./user-adderss.component.scss']
})
export class UserAdderssComponent implements OnInit{

  constructor(private _FormBuilder:FormBuilder , private _PaymentService:PaymentService , private _ActivatedRoute:ActivatedRoute){}

  detailsForm:FormGroup = this._FormBuilder.group({
    'details': [null , [Validators.required , Validators.minLength(10) , Validators.maxLength(30)]] ,
    'phone': [null , [Validators.required , Validators.pattern(/^01[0,1,2,5][0-9]{8}$/)]] ,
    'city': [null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]] ,
  })

  cartId:any = '' 

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.cartId = param.get('id')
      },
      error:(err)=>{        
      }
    })
  }

  completePayment(){
    this._PaymentService.onlinePayment(this.cartId , this.detailsForm.value).subscribe({
      next:(response)=>{
        if(response.status == 'success'){
          window.open(response.session.url , '_self')
        }
        
      },
      error:(err)=>{
      }
    })
  }

}
