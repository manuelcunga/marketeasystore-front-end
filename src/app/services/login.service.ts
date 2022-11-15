import { LoginDTO } from './dtos/login.dto';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) { }


  login(data: LoginDTO): Observable<any>{

    return this.httpClient.post(`${this.apiUrl}/login`, data).pipe(
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

