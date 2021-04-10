class PlanoConta {
    constructor(
      public id: number,
      public descricao: string,
      public login: string,
      public padrao: boolean,
      public tipoMovimento: string
    ){}
  }
  
  export {PlanoConta}