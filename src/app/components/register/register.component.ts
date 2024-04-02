import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormControlOptions, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage:string = ''
  isLoading:boolean = false

  constructor(private _AuthService:AuthService , private _Router:Router ){}

  registerForm:FormGroup = new FormGroup({
   'name' : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)]) , // error (2) i must use minLength not min
   'email' : new FormControl('' , [Validators.required , Validators.email]) , 
   'password' : new FormControl('' , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]) , 
   'rePassword' : new FormControl('') , 
   'phone' : new FormControl('' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]) , 
   
  } , {validators:[this.confirmPassword]} as FormControlOptions)

  confirmPassword(form:FormGroup):void
  {
    let pass:any = form.get('password') // error (1) = i should take the value from the parameter / not --> this.registerForm.get('password')
    let rePass:any = form.get('rePassword')

    if (rePass?.value == '') {
      rePass.setErrors({required:true})
    }
    
    else if (pass?.value != rePass?.value) {
      rePass?.setErrors({misMatch:true})
    }
    
  }


  signUp(){
   if (this.registerForm.valid) {
    let userData = this.registerForm.value
    this.isLoading = true
    this._AuthService.signupApi(userData).subscribe({
      next:(response)=>{
        if (response.message == 'success') {
          this.isLoading = false
          this._Router.navigate(['/login'])
        }
      },
      error:(err:HttpErrorResponse)=>{
        this.isLoading = false
        this.errorMessage = err.error.message
      }
    })
   }
  }
  showPass(e:any){
    e.target.closest('div').children[0].type = 'text';
    e.target.closest('div').children[1].classList.add('d-none');    
    e.target.closest('div').children[2].classList.remove('d-none');
  }
  hidePass(e:any){
    e.target.closest('div').children[0].type = 'password';
    e.target.closest('div').children[1].classList.remove('d-none');
    e.target.closest('div').children[2].classList.add('d-none');
  }
}
