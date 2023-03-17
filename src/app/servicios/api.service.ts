import { Injectable } from '@angular/core';
import { LoginInterface, LoginResponseInterface } from '../modelos/login.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, windowWhen } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://atid-auth-test.herokuapp.com/api/";

  constructor(private http: HttpClient) { }

  /*
  * Se realiza la petición POST al Endpoint
  */
  login(authData: LoginInterface): Observable<LoginResponseInterface | void> {
    let auth = this.url + "users/auth";
    return this.http
      .post<LoginResponseInterface>(auth, authData)
      .pipe(
        map((res: LoginResponseInterface) => {
          console.log('Res->', res);

          // saveToken()
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  /*
  * Función para cerrar la sesión
  */
  logout(): void { }
  private readToken(): void { }
  private saveToken(): void { }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error occurred with the request';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}


