import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private _CartService:CartService , private _Renderer2:Renderer2 , private _ToastrService:ToastrService){}
  userCartDetails:any 
  cartItems:boolean = true
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{       
          this.userCartDetails = response.data
          
        if (response.numOfCartItems == 0) {
          this.cartItems = false
        }
      },
      error:(err)=>{
        this.cartItems = false
        this.userCartDetails = {totalCartPrice:0} 
      }
    })
  }

  deleteItem(itemId:any , deleteBtn:HTMLButtonElement){
    this._Renderer2.setAttribute(deleteBtn , 'disabled', 'true')
    this._CartService.deleteItem(itemId).subscribe({
      next:(response)=>{        
        this._Renderer2.removeAttribute(deleteBtn , 'disabled')
        this.userCartDetails = response.data        
        this._CartService.cartItemsNumber.next(response.numOfCartItems)
        this._ToastrService.warning('the product was deleted from your cart', 'FreshCart')
        if (response.numOfCartItems == 0) {
          this.cartItems = false
        }
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(deleteBtn , 'disabled')
      }
    })
  }
  UpdateItemCount(itemId:any ,e:any , updateBtn:HTMLButtonElement){
    let num:any = Number(e.target.closest('.parent').children[1].innerText)
    this._Renderer2.setAttribute(updateBtn , 'disabled' , 'true')
    this._CartService.updateItemCount(itemId ,num).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(updateBtn , 'disabled')
        this.userCartDetails = response.data
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(updateBtn , 'disabled')
      }
    })
  }

  increaseCount(e:any){
    let x:number = Number(e.target.closest('.parent').children[1].innerText);
    x++
    e.target.closest('.parent').children[1].innerText = x
  }
  minusCount(e:any){
    let x:number = Number(e.target.closest('.parent').children[1].innerText);
    x--
    
    if (x == 1) {
      e.target.closest('.parent').children[1].innerText = 1
    }
    if (x > 1) {
      e.target.closest('.parent').children[1].innerText = x
    }
    
  }

  removeCart(removeBtn:HTMLButtonElement){
    this._Renderer2.setAttribute(removeBtn , 'disabled' , 'true')
    this._CartService.deleteCart().subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(removeBtn , 'disabled')
        this._CartService.cartItemsNumber.next(0)
        if (response.message == 'success') {
          this.userCartDetails = ''   
          this.cartItems = false   
          this.userCartDetails = {totalCartPrice:0}    
          this._ToastrService.warning('Your Cart is empty now', 'FreshCart')
        }
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(removeBtn , 'disabled')        
      }
    })
  }
 
}
