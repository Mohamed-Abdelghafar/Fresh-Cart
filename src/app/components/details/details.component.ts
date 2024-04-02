import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute , private _ToastrService:ToastrService , private _CartService:CartService ,private _Renderer2:Renderer2) {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.start()
      }
    })
  }

  productId: any = ''
  productDetails: any
  arrived:boolean = false

  start(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.productId = param.get('id')
      },
      error: (err) => {
      }
    }),
      this._ProductsService.getSpecificProduct(this.productId).subscribe({
        next: (response) => {
          this.productDetails = response.data                    
          this.arrived = true
        },
        error: (err) => {
        }
      })
  }

  addToCart(addBtn:HTMLButtonElement){
    this._Renderer2.setAttribute(addBtn , 'disabled' , 'true')
    this._CartService.addToCart(this.productId).subscribe({
      next:(response)=>{
        this._Renderer2.removeAttribute(addBtn , 'disabled')
        this._ToastrService.success(response.message, 'FreshCart')
        this._CartService.cartItemsNumber.next(response.numOfCartItems)        
      }
    })
  }

  productImages: OwlOptions = {
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

  @ViewChild('img')mainImg!:ElementRef
  active(e:any){
    const imgSrc:string = e.target.src;
    this.mainImg.nativeElement.src = imgSrc
  }

  
}
