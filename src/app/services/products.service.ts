import { ProductDTO } from './dtos/productDTo';
import { LoginDTO } from './dtos/login.dto';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://32ee-154-118-211-100.sa.ngrok.io/products';
  constructor(private httpClient: HttpClient){ }

  RegisterProduct(data: ProductDTO){
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}

