import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

import {GAMA_API} from '../../app.module'

import { Login } from './login.model'


@Injectable()
export class LoginService {

  constructor(private http: HttpClient){}

  autenticar(login: Login): Observable<string> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json');

      console.log(headers);
    return this.http.post<string>(`${GAMA_API}/login`,
                          JSON.stringify(login),
                          {'headers': headers});
  }

}
