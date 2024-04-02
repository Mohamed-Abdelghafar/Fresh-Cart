import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsService } from 'src/app/core/services/brands.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  constructor(private _BrandsService:BrandsService){}

  allBrands:any = []
  arrived:boolean = false

  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next:(response)=>{
        this.allBrands = response.data
        this.arrived = true
      },
      error:(err)=>{
      }
    })
  }

}
