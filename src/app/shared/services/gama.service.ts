import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Login } from '../models/login.model'
import { ContaUsuario } from 'src/app/shared/models/banco.contabancaria.model';
import { Usuario } from '../models/banco.usuario.model';
import { environment } from 'src/environments/environment';

export const GAMA_API = environment.GAMA_API;

@Injectable()
export class GamaBankService {

  constructor(private http: HttpClient){}

  login(login: Login): Observable<ContaUsuario> {
    return this.http.post<ContaUsuario>(`${GAMA_API}/login`, login);
  }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${GAMA_API}/usuarios`, usuario);
  }

}
