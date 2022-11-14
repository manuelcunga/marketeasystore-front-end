import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,  private notification: NgToastService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    this.registerService.register(form.value).subscribe(
      (res)=>{
        return this.notification.success({
          detail: 'Sucesso!',
          summary: 'Usuário criado com sucesso!',
          duration: 2000,
        });
      },
      (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao criar usuário!',
          duration: 2000,
        });
      }
    )
  }

}
