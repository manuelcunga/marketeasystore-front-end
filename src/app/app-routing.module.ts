import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateOrdersComponent } from "./create-orders/create-orders.component";
import { ListOrdersComponent } from "./list-orders/list-orders.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { RegisterComponent } from "./register/register.component";
import { UserGuard } from "./services/auth/user.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "produto",
    component: ProductComponent,
    canActivate: [UserGuard],
  },
  {
    path: "produtos",
    component: ListProductsComponent,
    canActivate: [UserGuard],
  },
  {
    path: "criar-pedidos",
    component: CreateOrdersComponent,
    canActivate: [UserGuard],
  },
  {
    path: "list-pedidos",
    component: ListOrdersComponent,
    canActivate: [UserGuard],
  },
  {
    path: "criar-produtos",
    component: ListOrdersComponent,
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
