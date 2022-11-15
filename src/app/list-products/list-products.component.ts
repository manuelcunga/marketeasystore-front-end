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
          summary: 'Email or password incorrect',
          duration: 2000,
        });
      }
    );
  }
}
