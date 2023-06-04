import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styles: [
    `
      .responsive-img{
        width: 100%;
        flex: 0 0 30%;
        object-fit: cover;
      }
    `
  ]
})
export class LoginLayoutComponent {


  // private fb = Inject(FormBuilder);

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){

  }

  public onLogin():void{
    console.log(this.loginForm)
    // if( this.loginForm.invalid ) return;

    // this.router.navigateByUrl('/dashboard')
  }
}
