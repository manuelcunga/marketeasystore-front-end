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

  public orders: OrderResponse[] = []

  constructor(private orderService: OrdersService, private notification: NgToastService) { }

  ngOnInit(): void {
    this.listAllOrders()
  }

  listAllOrders(){
    return this.orderService.ListALlOrders().subscribe(
      (res) => {
       this.orders = res
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

  DeleteOrder(id: string){
    return this.orderService.DeleteOrder(id)
    .subscribe((data)=>{
      return this.notification.success({
        detail: 'Sucesso!',
        summary: 'Produto deletado com sucesso',
        duration: 2000,
      });
    },
      (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao deletar pedido',
          duration: 2000,
        });
      }
    )
  }
}
