import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Login } from '../models/login.model'
import { GAMA_API } from 'src/app/app.module';
import { ContaBancaria } from 'src/app/models/banco.contabancaria.model';
import { Usuario } from '../models/banco.usuario.model';


@Injectable()
export class GamaBankService {

  constructor(private http: HttpClient){}

  login(login: Login): Observable<ContaBancaria> {
    return this.http.post<ContaBancaria>(`${GAMA_API}/login`, login);
  }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${GAMA_API}/usuarios`, usuario);
  }

}
