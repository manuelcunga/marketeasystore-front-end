import { Component, OnInit } from "@angular/core";
import { NgToastService } from "ng-angular-popup";
import { ProductResponse } from "../services/dtos/productResponse";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.css"],
})
export class ListProductsComponent implements OnInit {
 public products: ProductResponse[] = []

  constructor(private productService: ProductsService, private notification: NgToastService) {}

  ngOnInit(): void {
    this.ReadAll()
  }

  ReadAll() {
    return this.productService.ListALlProducts().subscribe(
      (res) => {
       this.products = res
      },
      (err) => {
        return this.notification.error({
          detail: 'Erro!',
          summary: 'Erro ao listar Produto',
          duration: 2000,
        });
      }
    );
  }

  DeleteProduct(id: string){
    return this.productService.DeleteProduct(id)
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
