import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { PaymentService } from 'src/app/core/services/payment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { DiscountPipe } from 'src/app/core/pipes/discount.pipe';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FormsModule,SearchPipe,DiscountPipe],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  constructor(private _Router:Router ,private _AuthService:AuthService , private _CartService:CartService , private _Renderer2:Renderer2 , private _WishListService:WishListService , private _PaymentService:PaymentService ,private _ProductsService:ProductsService){}

  @ViewChild('navBar')navBarRef!:ElementRef
  
  @HostListener('window:scroll') changeColor(){
    if (scrollY > 250) {
      this._Renderer2.addClass(this.navBarRef.nativeElement , 'bg-change')
    }
    else {
      this._Renderer2.removeClass(this.navBarRef.nativeElement , 'bg-change')
    }
  }

  itemsCartCount:number = 0
  wishListProductsCount:number = 0
  userOrdersNumber:number = 0
  userId:string = ''
  userName:string = ''
  mainSearchTerm:string = ''
  allProducts:any[] = []

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(response)=>{
        this.allProducts = response.data
      },
      error:(err)=>{        
      }
    })
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
          this.itemsCartCount = response.numOfCartItems
      },
      error:(err)=>{                
      }
    })
    this._CartService.cartItemsNumber.subscribe({
      next:(response)=>{
        this.itemsCartCount = response  
      },
      error:(err)=>{        
      }
    })
    this._WishListService.getUserWishList().subscribe({
      next:(response)=>{
        this.wishListProductsCount = response.count
      },
      error:(err)=>{ 
        console.log(err);
               
      }
    })
    this._WishListService.wishListProductsCount.subscribe({
      next:(response)=>{
        this.wishListProductsCount = response  
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    this._AuthService.decodeToken()
    this.userId = this._AuthService.userData.id
    this.userName = this._AuthService.userData.name
    
    this._PaymentService.userAllOrders(this.userId).subscribe({
      next:(response)=>{
        this.userOrdersNumber = response.length
      },
      error:(err)=>{ 
        console.log(err);
               
      }
    })
    this._PaymentService.ordersNumber.subscribe({
      next:(response)=>{
        this.userOrdersNumber = response
      },
      error:(err)=>{ 
        console.log(err);
               
      }
    })
  } 

  signOut(){
    localStorage.removeItem('user-Token')
    this._Router.navigate(['/login'])
  }

  showSearchList(searchList:HTMLDivElement){
    this._Renderer2.removeClass(searchList , 'd-none')
  }

  productDetails(id:any , searchList:HTMLDivElement){
    this._Router.navigate([`/details/${id}`])
    this._Renderer2.addClass(searchList , 'd-none')
  }

  // close SearchList when click in any where except searchInput 

  @ViewChild('searchInput')searchInput!:ElementRef
  @ViewChild('searchList')searchList!:ElementRef

  @HostListener('window:click' , ['$event']) closeSearchList(event:any){
    if (event.target !== this.searchInput.nativeElement) {
      this._Renderer2.addClass(this.searchList.nativeElement , 'd-none')
    }
  }

  // 

  showText:boolean = false
  check(){
    if (this.searchList.nativeElement.innerText == '') {
      this.showText = true
    }
    else {
      this.showText = false
    }
  }

}
