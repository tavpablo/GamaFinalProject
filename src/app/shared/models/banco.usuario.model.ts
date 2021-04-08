class Usuario {
    constructor(
      public id: number,
      public cpf: string,
      public login: string,
      public nome: string,
      public redefinirSenha: boolean,
      public senha: string,
      public senhaTemporaria: string
    ){}
  }
  
  export {Usuario}