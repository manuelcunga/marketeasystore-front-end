import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrdersService } from "../services/orders.service";
import { ProductsService } from "../services/products.service";
import { ActivatedRoute } from "@angular/router";
import { NgToastService } from "ng-angular-popup";
@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private router: ActivatedRoute,
    private notification: NgToastService
  ) {}
  ngOnInit(): void {}

  updateProduct(data: NgForm) {
    const id: string = this.router.snapshot.params["id"];

    this.productService.UpdateProduct(id, data.value).subscribe(
      (data) => {
        return this.notification.success({
          detail: "Sucesso!",
          summary: "Produto Atualizado com sucesso",
          duration: 2000,
        });
      },
      (err) => {
        return this.notification.error({
          detail: "Erro!",
          summary: "Erro ao Atualizar produto",
          duration: 2000,
        });
      }
    );
  }
}
