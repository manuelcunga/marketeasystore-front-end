import { NgToastService } from 'ng-angular-popup';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private router: Router, private notification: NgToastService) { }


  doLogin(form: NgForm){
    if (form.invalid) {
      return this.notification.warning({
        detail: 'warning!',
        summary: 'Campos obrigatorios!',
        duration: 2000,
      });
    }
    
    this.loginService.login(form.value).subscribe(
      
      (res)=>{
        localStorage.setItem('user_token', res.token)
        sessionStorage.setItem('user_session', res.token)
        this.router.navigate(['/produto'])
        
      },
      (err)=>{
         return this.notification.error({
              detail: 'Erro!',
              summary: 'Email or password incorrect',
              duration: 2000,
            });
      }
    )

  }

  
}
