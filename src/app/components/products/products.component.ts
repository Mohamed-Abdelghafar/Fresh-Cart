import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { DiscountPipe } from 'src/app/core/pipes/discount.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , NgxPaginationModule  ,FormsModule , SearchPipe , DiscountPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private _WishListService:WishListService ,private _ProductsService:ProductsService , private _CartService:CartService , private _Renderer2:Renderer2 , private _ToastrService:ToastrService){}
  pageSize:number = 0
  currentPage:number = 1
  total:number = 0
  allProducts:any[] = []
  term:string = ''
  userWishListData:any[] = []
  arrived:boolean = false


  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        this.allProducts = response.data
        this.pageSize = response.metadata.limit
        this.currentPage = response.metadata.currentPage
        this.total = response.results
        this.arrived = true
      },
      error:(err)=>{
      }
    }),
    this._WishListService.getUserWishList().subscribe({
      next: (response) => {        
        this.userWishListData = response.data.map((item:any)=>item.id)        
      },
      error: (err) => {
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

  pageChanged(e:any){
    console.log(e);
    this._ProductsService.getAllProducts(e).subscribe({
      next:(response)=>{
        console.log(response.data);
        this.allProducts = response.data
        this.pageSize = response.metadata.limit
        this.currentPage = response.metadata.currentPage
        this.total = response.results
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
