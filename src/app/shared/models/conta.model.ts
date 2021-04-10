import { Lancamento } from "./lancamento.model";

class Conta {
    constructor(
      public id: number,
      public descricao: string,
      public numero: string,
      public tipo: string,
      public saldo: number,
      public lancamentos: Lancamento[]
    ){}
  }
  
  export {Conta}