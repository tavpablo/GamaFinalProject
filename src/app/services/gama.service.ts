import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Login } from '../models/login.model'
import { ContaBancaria } from 'src/app/models/banco.contabancaria.model';
import { Usuario } from '../models/banco.usuario.model';
import { environment } from 'src/environments/environment';

export const GAMA_API = environment.GAMA_API;

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
