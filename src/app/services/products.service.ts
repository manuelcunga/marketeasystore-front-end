import { ProductDTO } from './dtos/productDTo';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://171b-154-118-211-100.sa.ngrok.io/products';
 

  constructor(private httpClient: HttpClient){ }

  RegisterProduct(data: ProductDTO){
  const token = localStorage.getItem('user_token')
    console.log(token)
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization':  String(token)})
  }; 
    return this.httpClient.post(this.apiUrl, data,httpOptions).pipe(
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

