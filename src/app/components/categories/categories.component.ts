import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _CategoriesService:CategoriesService){}

  allCategories:any[] = []
  arrived:boolean = false

  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(response)=>{
        this.allCategories = response.data
        this.allCategories[2].image = 'https://img.freepik.com/free-vector/hand-drawn-empowered-muslim-woman-illustration_23-2149704215.jpg?size=626&ext=jpg&ga=GA1.1.2118351627.1698065771&semt=ais'
        this.arrived = true
      },
      error:(err)=>{
      }
    })
  }
}
