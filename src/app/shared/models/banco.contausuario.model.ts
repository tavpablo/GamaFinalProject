import { Conta } from "./banco.conta.model";
import { Usuario } from "./banco.usuario.model";

class ContaUsuario {
    constructor(
      public dataInicio: Date,
      public dataFim: Date,
      public token: string,
      public conta: Conta,
      public contaCredito: Conta,
      public usuario: Usuario,
    ){}
  }
  
  export {ContaUsuario}