import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ],
templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private _FormBuilder:FormBuilder , private _AuthService:AuthService , private _ToastrService:ToastrService , private _Router:Router){}

  errorMessage:string = ''
  
  updatePasswordForm:FormGroup = this._FormBuilder.group({
    'currentPassword' : ['' , [Validators.required]] , 
    'password' : ['' , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]] , 
    'rePassword' : [''] , 
    
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

   update(){
    this._AuthService.updateLoggedUserPassword(this.updatePasswordForm.value).subscribe({
      next:(response)=>{
        if (response.message == "success") {
          this._ToastrService.success('Your Password Was Updated Successfully')
          setTimeout(() => {
            this._Router.navigate(['/login'])
          }, 700);
        }
      },
      error:(err)=>{
        console.log(err);
        this.errorMessage = err.error.errors.msg
      }
    })
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
