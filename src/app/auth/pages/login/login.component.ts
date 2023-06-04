import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
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
      // console.log(this.loginForm)
      if( this.loginForm.invalid ) return;

      this.router.navigateByUrl('/dashboard')
    }
}
