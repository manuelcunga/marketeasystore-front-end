import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {

  constructor(private orderService: OrdersService,  private notification: NgToastService) { }

  ngOnInit(): void {
  }

  CreateOrder(form: NgForm){
    console.log(form.value)
      this.orderService.createOrder(form.value)
      .subscribe((data)=> {
        return this.notification.success({
          detail: 'Sucesso!',
          summary: 'Pedido criado com sucesso!',
          duration: 2000,
        });
      } , (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao criar Pedido!',
          duration: 2000,
        });
      })
  }

}
