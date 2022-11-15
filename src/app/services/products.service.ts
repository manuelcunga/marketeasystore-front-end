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

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  RegisterProduct(data: ProductDTO) {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().set(
      "Authorization",
      "bearer " + token
    );
    console.log("create",httpOption)

    return this.httpClient
      .post(`${this.apiUrl}/product`, data, {
        headers: httpOption,
      })
      .pipe(catchError(this.handleError));
  }

  ListALlProducts(): Observable<[]> {
    const token = localStorage.getItem("user_token");
    const httpOption = new HttpHeaders().append(
      "Authorization",
      "bearer " + token,

    );
    console.log(httpOption)
    
    return this.httpClient.get<[]>(`${this.apiUrl}/products`, { headers: httpOption, }
    ).pipe(
      map((obj)=> obj),
      catchError(e => this.handleError(e))
    )
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
