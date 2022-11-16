import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { OrderResponse } from '../services/dtos/ordersReponse';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  public products: OrderResponse[] = []

  constructor(private orderServiceL: OrdersService, private notification: NgToastService) { }

  ngOnInit(): void {
    this.listAllOrders()
  }

  listAllOrders(){
    return this.orderServiceL.ListALlOrders().subscribe(
      (res) => {
       this.products = res
       console.log(res)
      },
      (err) => {
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao listar Pedidos',
          duration: 2000,
        });
      }
    );
  }

}
