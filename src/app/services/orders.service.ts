import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { RegisterDTO } from './dtos/register.dto';
import { environment } from 'src/environments/environment';
import { CreateOrderDTO } from './dtos/createOrder.dto';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient){ }

  createOrder(data: CreateOrderDTO): Observable<any>{
     return this.httpClient.post(`${this.apiUrl}/order`, data).pipe(
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

