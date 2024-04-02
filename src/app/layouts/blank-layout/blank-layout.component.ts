import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/components/nav-blank/nav-blank.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavBlankComponent,FooterComponent],
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent {
  constructor(private _Renderer2:Renderer2){}
  @ViewChild('upBtn') upButton!:ElementRef
  @HostListener('window:scroll')showBtn(){
    if (scrollY > window.screenY) {
      this._Renderer2.removeClass(this.upButton.nativeElement , 'd-none')
    }
    else {
      this._Renderer2.addClass(this.upButton.nativeElement , 'd-none')
    }
  }

  scrollToTop(){

    window.scrollTo(0,0)
  }

}
