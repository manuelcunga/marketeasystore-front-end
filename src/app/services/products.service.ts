import { ProductDTO } from "./dtos/productDTo";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ProductResponse } from "./dtos/productResponse";
import { UpdateProductDTO } from "./dtos/UpdateproductDTo";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient, private router: ActivatedRoute) {}

  RegisterProduct(data: ProductDTO) {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().set(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .post(`${this.apiUrl}/product`, data, {
        headers: httpOption,
      })
      .pipe(catchError(this.handleError));
  }

  ListALlProducts(): Observable<ProductResponse[]> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .get<ProductResponse[]>(`${this.apiUrl}/products`, {
        headers: httpOption,
      })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  DeleteProduct(id: string): Observable<ProductResponse[]> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .delete<ProductResponse[]>(`${this.apiUrl}/product/${id}`, {
        headers: httpOption,
      })
      .pipe(
        map((obj) => obj),
        catchError((e) => this.handleError(e))
      );
  }

  UpdateProduct(
    id: string,
    data: UpdateProductDTO
  ): Observable<ProductResponse[]> {
    const token = localStorage.getItem("user_token");

    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token
    );

    return this.httpClient
      .put<ProductResponse[]>(`${this.apiUrl}/product/${id}`, data, {
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
