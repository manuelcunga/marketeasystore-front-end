import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private notification: NgToastService, private productService: ProductsService) { }

  ngOnInit(): void {
  }

  CreateProduct(form: NgForm){
    if (form.value == ''){
      return this.notification.warning({
        detail: 'Campos vazios!',
        summary: 'Campos obrigatorios!',
        duration: 2000,
      });
    }

    this.productService.RegisterProduct(form.value).subscribe(
      (res)=>{
        return this.notification.success({
          detail: 'Sucesso!',
          summary: 'Produto criado com sucesso!',
          duration: 2000,
        });
      },
      (err)=>{
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao criar Produto!',
          duration: 2000,
        });
      }
    )
  }

}
