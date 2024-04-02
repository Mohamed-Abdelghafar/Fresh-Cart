import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BrandsService } from 'src/app/core/services/brands.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { DiscountPipe } from 'src/app/core/pipes/discount.pipe';

@Component({
  selector: 'app-specific-brand',
  standalone: true,
  imports: [CommonModule , RouterLink , DiscountPipe],
  templateUrl: './specific-brand.component.html',
  styleUrls: ['./specific-brand.component.scss']
})
export class SpecificBrandComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _WishListService:WishListService , private _BrandsService:BrandsService , private _ProductsService:ProductsService ,private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){}
  brandId:any=''
  brandData:any=[]
  allProducts:any=[]
  userWishListData:any[] = []
  arrived:boolean = false
  noProducts:boolean = false

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.brandId = param.get('id')
      },
      error:(err)=>{
      }
    }),
    this._BrandsService.getSpecificBrand(this.brandId).subscribe({
      next:(response)=>{
        this.brandData = response.data
        this.arrived = true
      }
    }),
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        this.allProducts = response.data
        this.allProducts = response.data.filter((product:any)=>product.brand._id == this.brandId)
        if (this.allProducts.length == 0) {
          this.noProducts = true
        }
      },
      error:(err)=>{
        
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
        
      }
    })
  }
  removeFromWishList(id: any) {
    this._WishListService.removeFromWishList(id).subscribe({
      next: (response) => {
        this.userWishListData = response.data
        this._ToastrService.warning(response.message, 'FreshCart')
        this._WishListService.wishListProductsCount.next(response.data.length)
      },
      error: (err) => {

      }
    })
  }

  addToWishlist(id: string) {
    this._WishListService.addToWishList(id).subscribe({
      next: (response) => {
        this.userWishListData = response.data
          this._ToastrService.success(response.message, 'FreshCart')
          this._WishListService.wishListProductsCount.next(response.data.length)
      },
      error: (err) => {

      }
    })
  }

}
