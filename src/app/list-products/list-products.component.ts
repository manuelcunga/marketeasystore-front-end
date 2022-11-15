import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.css"],
})
export class ListProductsComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.ReadAll()
  }

  ReadAll() {
    return this.productService.ListALlProducts().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
