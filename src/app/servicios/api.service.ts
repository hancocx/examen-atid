import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://atid-auth-test.herokuapp.com/api";

  constructor(private http: HttpClient) { }

  /*
  * Se realiza la petición POST al Endpoint
  */
  loginByEmail(form: LoginI): Observable<ResponseI> {
    let authentication = this.url + "/users/auth";
    return this.http.post<ResponseI>(authentication, form);
  }
}
