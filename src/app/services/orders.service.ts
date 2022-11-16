import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { RegisterDTO } from "./dtos/register.dto";
import { environment } from "src/environments/environment";
import { CreateOrderDTO } from "./dtos/createOrder.dto";
import { OrderResponse } from "./dtos/ordersReponse";
import { UpdateOrder } from "./dtos/UpdateOrder.dto";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}
  createOrder(data: CreateOrderDTO): Observable<any> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().set(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .post(`${this.apiUrl}/order`, data, {
        headers: httpOption,
      })
      .pipe(catchError(this.handleError));
  }

  ListALlOrders(): Observable<OrderResponse[]> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .get<OrderResponse[]>(`${this.apiUrl}/orders`, { headers: httpOption })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  DeleteOrder(id: string): Observable<OrderResponse[]> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .delete<OrderResponse[]>(`${this.apiUrl}/order/${id}`, {
        headers: httpOption,
      })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  UpdateOrder(id: string, data: UpdateOrder): Observable<UpdateOrder[]> {
    const token = localStorage.getItem("user_token");

    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .put<UpdateOrder[]>(`${this.apiUrl}/order/${id}`, data, {
        headers: httpOption,
      })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
