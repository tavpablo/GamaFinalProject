import { PlanoConta } from "./plano-conta.model";

class Lancamento {
    constructor(
      public id: number,
      public conta: number,
      public data: Date,
      public descricao: string,
      public planoConta: PlanoConta,
      public tipo: string,
      public valor: number
    ){}
  }
  
  export {Lancamento}