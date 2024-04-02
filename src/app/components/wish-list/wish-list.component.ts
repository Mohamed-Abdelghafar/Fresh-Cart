import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit{
  constructor(private _WishListService:WishListService , private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){}

  userWishListProducts:any[] = []
  show:boolean = false
  arrived:boolean = false

  ngOnInit(): void {
    this._WishListService.getUserWishList().subscribe({
      next: (response) => {
        this.userWishListProducts = response.data  
        this.arrived = true 
        if (response.data.length > 0) {
          this.show = false
        }
        else {
          this.show = true
        }     
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addToCart(id:string , element:HTMLButtonElement){
    this._Renderer2.setAttribute(element , 'disabled' , 'true')
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(element , 'disabled')
        this._ToastrService.success(response.message , 'FreshCart')
        this._CartService.cartItemsNumber.next(response.numOfCartItems)
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }


  removeFromWishList(id: any) {
    this._WishListService.removeFromWishList(id).subscribe({
      next: (response) => {        
        if (response.data.length > 0) {
          this.show = false
        }
        else {
          this.show = true
        }     
        this.userWishListProducts = this.userWishListProducts.filter((product)=>response.data.includes(product.id));
        this._ToastrService.warning(response.message , 'FreshCart')
        this._WishListService.wishListProductsCount.next(response.data.length)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
