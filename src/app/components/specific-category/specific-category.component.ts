import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from './../../core/services/products.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { DiscountPipe } from 'src/app/core/pipes/discount.pipe';
import { WishListService } from 'src/app/core/services/wish-list.service';


@Component({
  selector: 'app-specific-category',
  standalone: true,
  imports: [CommonModule  , RouterLink , DiscountPipe],
  templateUrl: './specific-category.component.html',
  styleUrls: ['./specific-category.component.scss']
})
export class SpecificCategoryComponent implements OnInit{
  constructor(private _CategoriesService:CategoriesService , private _WishListService:WishListService , private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService , private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){}
  categoryId:any = ''
  categoryData:any = {}
  allProducts:any[] = []
  userWishListData:any[] = []
  arrived:boolean = false
  noProducts:boolean = false

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.categoryId = param.get('id')
      }
    })
    this._CategoriesService.getspecificCategory(this.categoryId).subscribe({
      next:(response)=>{        
        this.categoryData = response.data
        if (this.categoryData.image=="https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg") {
          this.categoryData.image = 'https://img.freepik.com/free-vector/hand-drawn-empowered-muslim-woman-illustration_23-2149704215.jpg?size=626&ext=jpg&ga=GA1.1.2118351627.1698065771&semt=ais'
        }
        this.arrived = true
      },
      error:(err)=>{
        
      }
    }),
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{        
        this.allProducts = response.data
        this.allProducts = response.data.filter((product:any)=>product.category._id == this.categoryId)
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
