import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private orderService: OrdersService, private router:ActivatedRoute, private notification: NgToastService ) { }

  ngOnInit(): void {
  }

  UpdateOrder(data: NgForm){
    const id: string = this.router.snapshot.params['id']
      
      this.orderService.UpdateOrder(id,data.value).subscribe((data)=>{
        return this.notification.success({
          detail: 'Sucesso!',
          summary: 'Pedido Atualizado com sucesso',
          duration: 2000,
        });
      },
      (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao Atualizar Pedido',
          duration: 2000,
        });
      }
      )
    }
  

}
