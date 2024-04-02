import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  errorMessage: string = ''
  isLoading: boolean = false
  showIcon:boolean = true
  hideIcon:boolean = false


  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder) { }

  loginForm: FormGroup = this._FormBuilder.group({
    'email': [''],
    'password': ['']
  })

  signin() {
    if (this.loginForm.valid) {
      let userData = this.loginForm.value
      this.isLoading = true
      this._AuthService.signinApi(userData).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false
            localStorage.setItem('user-Token', response.token)
            this._AuthService.decodeToken()
            this._Router.navigate(['/home'])
          }
        },
        error: (err: HttpErrorResponse) => {
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