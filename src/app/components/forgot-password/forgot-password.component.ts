import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private _FormBuilder: FormBuilder, private _AuthService: AuthService , private _Router:Router ,private _Renderer2:Renderer2) { }

  stepOne: boolean = true
  stepTwo: boolean = false
  stepThree: boolean = false
  numberOne: boolean = true
  numberTwo: boolean = true
  numberThree: boolean = true
  iconOne: boolean = false
  iconTwo: boolean = false
  iconThree: boolean = false

  forgotFormMsg: string = ''
  resetCodeWasSent: string = ''
  codeFormMsg: string = ''
  resetPassFormMsg: string = ''

  userEmail:string = ''

  forgotPassForm: FormGroup = this._FormBuilder.group({
    'email': [null, [Validators.required, Validators.email]]
  })
  resetCodeForm: FormGroup = this._FormBuilder.group({
    'resetCode': [null, [Validators.required]]
  })
  resetPassForm: FormGroup = this._FormBuilder.group({
    'newPassword': [null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]
  })

  forgotPass(forgotBtn:HTMLButtonElement) {
    this._Renderer2.setAttribute(forgotBtn , 'disabled' , 'true')
    let userEmail = this.forgotPassForm.value
    this.userEmail = userEmail.email
    this._AuthService.forgotPassword(userEmail).subscribe({
      next: (response) => {
        if (response.statusMsg == 'success') {
          this.forgotFormMsg = ''
          this.resetCodeWasSent = response.message
          setTimeout(() => {
            this.numberOne = false
            this.iconOne = true
            this.stepOne = false
            this.stepTwo = true
          }, 3000);
        }
      },
      error: (err) => {
        this._Renderer2.removeAttribute(forgotBtn , 'disabled')
        this.forgotFormMsg = err.error.message
      }
    })
  }

  resetCode(codeBtn:HTMLButtonElement) {
    this._Renderer2.setAttribute(codeBtn , 'disabled' , 'true')
    let code = this.resetCodeForm.value
    this._AuthService.resetCode(code).subscribe({
      next: (response) => {
        this._Renderer2.removeAttribute(codeBtn , 'disabled')
        if (response.status == "Success") {
          this.numberTwo = false
          this.iconTwo = true
          this.stepTwo = false
          this.stepThree = true
        }
      },
      error: (err) => {
        this._Renderer2.removeAttribute(codeBtn , 'disabled')
        this.codeFormMsg = err.error.message
      }
    })
  }

  resetPass(passBtn:HTMLButtonElement) {
    this._Renderer2.setAttribute(passBtn , 'disabled' , 'true')
    let resetPassForm = this.resetPassForm.value
    resetPassForm.email = this.userEmail 
    
    this._AuthService.resetPass(resetPassForm).subscribe({
      next: (response) => {
        this._Renderer2.removeAttribute(passBtn , 'disabled')
        if(response.token){
          localStorage.setItem('user-Token' , response.token)
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {
        this._Renderer2.removeAttribute(passBtn , 'disabled')
        this.resetPassFormMsg = err.error.message
      }
    })
  }

}
