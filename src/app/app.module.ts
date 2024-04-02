import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { SendTokenInterceptor } from './core/interceptors/send-token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingScreenInterceptor } from './core/interceptors/loading-screen.interceptor';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass:SendTokenInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS , useClass:LoadingScreenInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
