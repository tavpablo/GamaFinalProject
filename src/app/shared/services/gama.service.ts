import {Injectable} from '@angular/core'

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import { Login } from '../models/login.model'
import { ContaUsuario } from 'src/app/shared/models/banco.contausuario.model';
import { Usuario } from '../models/banco.usuario.model';
import { environment } from 'src/environments/environment';
import { Sessao } from '../models/sessao.model';

export const GAMA_API = environment.GAMA_API;

@Injectable()
export class GamaBankService {
  
  public sessao!: Sessao; 

  constructor(private http: HttpClient){}

  login(login: Login): Observable<ContaUsuario> {
    return this.http.post<ContaUsuario>(`${GAMA_API}/login`, login);
  }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${GAMA_API}/usuarios`, usuario);
  }

  getSessao(): Sessao {
      if (!this.sessao){
          const s = localStorage.getItem('gs');
          if (s) this.sessao = JSON.parse(s);
      } 
      return this.sessao;
  }

  setSessao(contaUsuario: ContaUsuario) {

      this.sessao = new Sessao(contaUsuario.token, contaUsuario.usuario.nome, contaUsuario.usuario.cpf);
      localStorage.setItem('gs', JSON.stringify(this.sessao));

  }

  estaLogado(): boolean {

      if (this.getSessao()) return true;
      else return false;
      
  }

}
