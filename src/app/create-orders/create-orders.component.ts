import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {

  constructor(private orderService: OrdersService,  private notification: NgToastService, private router: Router) { }

  ngOnInit(): void {
  }

  CreateOrder(form: NgForm){
      this.orderService.createOrder(form.value)
      .subscribe(
        (res)=>{
          return this.notification.success({
            detail: 'Sucesso!',
            summary: 'Pedido criado com sucesso!',
            duration: 2000,
          }),
          this.router.navigate(['/list-pedidos'])
        },
        (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao criar Pedido!',
          duration: 2000,
        });
      })
  }

}
