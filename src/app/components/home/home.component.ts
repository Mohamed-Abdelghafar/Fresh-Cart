import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { DiscountPipe } from 'src/app/core/pipes/discount.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterLink , DiscountPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _WishListService: WishListService, private _ProductsService: ProductsService, private _CategoriesService: CategoriesService, private _CartService: CartService, private _ToastrService: ToastrService, private _Renderer2: Renderer2) { }

  allProducts: any[] = []
  allProductsArrived:boolean = false
  allCategories: any[] = []
  allCategoriesArrived:boolean = false
  userWishListData:any[] = []

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        let allProducts:any[] = response.data
        this.allProducts = allProducts.filter((product)=>product.ratingsAverage >= 4)
        this.allProductsArrived = true
      },
      error: (err) => {
      }
    }),
    this._CategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.allCategories = response.data
        this.allCategories[2].image = 'https://img.freepik.com/free-vector/hand-drawn-empowered-muslim-woman-illustration_23-2149704215.jpg?size=626&ext=jpg&ga=GA1.1.2118351627.1698065771&semt=ais' 
        this.allCategoriesArrived = true       
      },
      error: (err) => {
      }
    })
    this._WishListService.getUserWishList().subscribe({
      next: (response) => {        
        this.userWishListData = response.data.map((item:any)=>item.id)        
      },
      error: (err) => {
      }
    })
  }

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  categoriesSlider: OwlOptions = {
    loop: true,
    autoplay:true ,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300:{
        items: 2
      },
      500: {
        items: 3
      },
      600:{
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  addToCart(id: string, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, 'disabled', 'true')
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        this._Renderer2.removeAttribute(element, 'disabled')
        this._ToastrService.success(response.message, 'FreshCart')
        this._CartService.cartItemsNumber.next(response.numOfCartItems)
      },
      error: (err) => {
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