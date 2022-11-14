import { NgToastModule } from 'ng-angular-popup';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateOrdersComponent } from './create-orders/create-orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProductComponent,
    ListProductsComponent,
    CreateOrdersComponent,
    ListOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
